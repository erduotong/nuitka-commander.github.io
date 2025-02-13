<script setup>
/**
 * @Description 可以让用户定义的多选
 * @Author: erduotong
 * @Date: 2024-02-29 19:58:39
 */
import * as constants from "@/values/constants.json";
import {user_options} from "@/values/stores/user_options.js";
import ElementCard from "@/components/utils/elementCard.vue";
import {ElInput, ElMessage, ElMessageBox} from "element-plus";
import {computed, onBeforeUnmount, ref, watch} from "vue";
import {add_option} from "@/values/templates.js";
import {useI18n} from "vue-i18n";
import {Delete} from "@element-plus/icons-vue";
import {is_array_equivalent} from "@/modules/untils.js";
import {use_command} from "@/modules/use_command.js";
import CliCommandCard from "@/components/command_cards/cliCommandCard.vue";

/**
 * @type {ModelRef<{
 *  i18n: string,
 *  val: string[],
 *  default: string[],
 *  id: number,
 *  command: {
 *    original:string,
 *  }
 *  enabled: boolean,
 *  default: string[],
 *  is_focusing:boolean,
 *  elements: {
 *    [key: string]: {
 *      i18n: string, // 如果是用户定义的，那么该属性不存在
 *      command:{
 *        original:string,
 *      }
 *      enabled:boolean,
 *      user_provide: boolean,
 *      user_provide: boolean,
 *    }
 *  }
 * }>}
 */
const model = defineModel();
/**
 * 额外的一些信息
 */
const props = defineProps({
  key_name: {
    type: String,
    required: true,
  },
});
const t = useI18n().t;
const output_desc = computed(() => {
  let result = `${t(`nuitka_info.${model.value.i18n}.desc`)}\n\n` +
      `${t(`nuitka_elements.option_desc`)}:\n\n`;
  model.value.val.forEach((item) => {
    result += `${model.value.elements[item].command.original}:  `;
    if (model.value.elements[item].user_provide === false) {
      result += `${t(`nuitka_info.${model.value.i18n}.elements.${item}.desc`)}`;
    } else {
      result += `${t(`nuitka_elements.user_provide`)}`;
    }
    result += "\n";
  });

  return result;
});

/**
 * 删除单个元素
 * @param key {string} 元素的key
 */
function delete_element(key) {
  //这边因为是用户定义的 就不给i18n了
  ElMessageBox.confirm(
      `${t(`message.will_del_option`)}: ${model.value.elements[key].command.original}, ${t(`message.continue_del`)}`,
      t("message.warning"),
      {
        confirmButtonText: t("message.OK"),
        cancelButtonText: t("message.cancel"),
        type: "warning",
      },
  ).then(() => {
    //从选项数组中删除并删除键值对
    const index = model.value.val.indexOf(key);
    if (index !== -1) {//如果不在就不用删除了
      model.value.val.splice(index, 1);
    }
    delete model.value.elements[key];
    // 出来力
    ElMessage({
      type: "success",
      message: t("message.del_success"),
      showClose: true,
      duration: constants.message_duration,
    });
  }).catch(() => {
    ElMessage({
      type: "info",
      message: t("message.cancel_del"),
      showClose: true,
      duration: constants.message_duration,
    });
  });
}

/**
 * 获取选项的label 如果用户定义则直接返回命令，否则考虑是否显示原始命令并返回
 * @param key
 * @param value
 * @return {string}
 */
function get_option_label(key, value) {
  if (value.user_provide === true) {
    return value.command.original;
  }
  let return_val = t(`nuitka_info.${model.value.i18n}.elements.${model.value.elements[key].i18n}.name`);
  if (user_options.value.show_original_command) {
    return_val += ` （${model.value.elements[key].command.original})`;
  }
  return return_val;
}

//////////////////////////////////////////////// 添加选项逻辑 ////////////////////////////////////////////////
const is_adding = ref(false);
const option_name = ref("");

function on_adding() {
  is_adding.value = true;
}

function on_confirm() {
  if (option_name.value.trim() === "") {
    return;
  }
  //todo 其他的判断检测 是否和命令重复
  if (option_name.value in model.value.elements) {
    ElMessage({
      type: "warning",
      message: t("message.have_been_created"),
      showClose: true,
      duration: constants.message_duration,
    });
    return;
  }

  console.log(`add option: ${option_name.value}`);
  model.value.elements[option_name.value] = {
    ...add_option.multi_elements(
        "",
        {
          original: option_name.value,
        },
        true,
        true,
    ),
  };

  on_cancel();
}

function on_cancel() {
  option_name.value = "";
  is_adding.value = false;
}

///////////////////////////
const user_provides_options = computed(() => {
  //遍历所有的选项，将用户提供的选项过滤出来，返回一个对象
  let result = {};
  for (const key in model.value.elements) {
    if (model.value.elements[key].user_provide) {
      result[key] = model.value.elements[key];
    }
  }

  return result;
});
// 检测当前是否有用户自定义的配置，是否要保存到Json种
const need_json = computed(() => Object.keys(user_provides_options.value).length !== 0);

const is_equal = computed(() => is_array_equivalent(model.value.val, model.value.default));
const result = computed(() => {
  //cli输出
  let cli = ``;
  model.value.val.forEach((item, index) => {
    cli += `${model.value.command.original}="${model.value.elements[item].command.original}"`;
    if (index !== model.value.val.length - 1) {
      cli += " ";
    }
  });
  //
  return {
    cli,
    pyproject: null,
  };
});

//检查是否要保存到storage_config中，以及是否要将该组件进行输出
watch(() => [result, is_equal, need_json], ([new_result, new_is_equal, new_need_json]) => {
  // 如果值与默认值不符的话就加入到输出中
  if (new_is_equal.value) {
    delete use_command.output.value[props.key_name];
  } else {
    use_command.output.value[props.key_name] = new_result.value;
  }
  // 如果有用户自定义的配置或者值和原来不一样的话，那么就保存到storage_config中
  if (!new_is_equal.value || new_need_json.value) {
    use_command.storage_config.value[props.key_name] = {
      value: model.value.val,
      user_provides_choices: user_provides_options.value,
    }; //json的值
  } else {
    delete use_command.storage_config.value[props.key_name];
  }
}, {
  immediate: true,
  deep: true,
});
// 组件销毁则必须移除
onBeforeUnmount(() => {
  delete use_command.output.value[props.key_name];
});
///////////////////////////

</script>

<template>
  <el-tooltip :show-after="constants.element_show_after_time" effect="light" placement="top">
    <template #content>
      <div class="use_original_text">
        {{ $t(`nuitka_info.${model.i18n}.desc`) }}
      </div>
    </template>
    <element-card :focusing="model.is_focusing">
      <div class="nuitka-elements-text-area">
        <el-text size="large">{{ $t(`nuitka_info.${model.i18n}.name`) }}</el-text>
        <el-text v-if="user_options.show_original_command" size="large"> ({{ model.command.original }})</el-text>
      </div>
      <el-select
          v-model="model.val"
          :disabled="!model.enabled"
          :max-collapse-tags="constants.nuitka_multi_option.max_collapse_tags"
          :placeholder="$t('nuitka_elements.select_placeholder')"
          collapse-tags
          collapse-tags-tooltip
          filterable
          multiple
          class="nuitka-elements-selector"
      >
        <template v-for="(value,key) in model.elements" :key="key">
          <el-tooltip :show-after="constants.element_show_after_time" effect="light" placement="left-start">
            <template #content>
              <div class="use_original_text">
                <!--是否是用户给的-->
                <span v-if="value.user_provide===false">
                  {{ $t(`nuitka_info.${model.i18n}.elements.${model.elements[key].i18n}.desc`) }}
                </span>
                <span v-else>
                  {{ $t(`nuitka_elements.user_provide`) }}
                </span>
              </div>
            </template>
            <el-option
                :key="key"
                :disabled="!value.enabled"
                :label="get_option_label(key,value)"
                :value="key"
            >
              {{ get_option_label(key, value) }}
              <span v-if="value.user_provide===true" @click.stop="delete_element(key)">
    <el-icon><Delete /></el-icon>
              </span>
            </el-option>
          </el-tooltip>
        </template>
        <template #footer>
          <el-button v-if="!is_adding" bg size="small" text @click="on_adding">
            {{ $t("nuitka_elements.add_option") }}
          </el-button>
          <template v-else>
            <el-input
                v-model="option_name"
                :placeholder="t('nuitka_elements.input_an_option')"
                size="small"
                style="width: 100%;margin-bottom: 8px;"
            />
            <el-button size="small" type="primary" @click="on_confirm">
              {{ $t("message.OK") }}
            </el-button>
            <el-button size="small" @click="on_cancel">{{ $t("message.cancel") }}</el-button>
          </template>
        </template>
      </el-select>
    </element-card>
  </el-tooltip>
  <Teleport to="#cli_output">
    <cli-command-card
        :command="result.cli"
        :desc="output_desc"
        :name="t(`nuitka_info.${model.i18n}.name`)"
        :show="!is_equal"
    ></cli-command-card>
  </Teleport>
</template>

<style lang="scss" scoped>

</style>