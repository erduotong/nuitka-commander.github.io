<script setup>
/**
 * @overview 导入页面
 */
import {Promotion} from "@element-plus/icons-vue";
import {ref} from "vue";
import {input_type} from "@/values/enums.js";
import {ElMessage} from "element-plus";
import * as constants from "@/values/constants.json";
import {input_handlers} from "@/modules/input_handlers.js";
import {set_loading} from "@/values/stores/loading.js";
import {useI18n} from "vue-i18n";

const input_data = ref({
  [input_type.cli]: "",
  [input_type.json]: "",
});

const is_importing = ref(false);
// type为input_type
const t = useI18n().t;
const start_input = async (type) => {
  if (is_importing.value) {
    ElMessage({
      type: "warning",
      message: t("message.calling"),
      showClose: true,
      duration: constants.message_duration,
    });
    return;
  }
  set_loading(true);
  is_importing.value = true; // 一个防止过快导入的东西
  await input_handlers[type](input_data.value[type]);
  set_loading(false);
  is_importing.value = false;
};
</script>

<template>
  <!--记得写input_type-->
  <!--command line-->
  <el-tabs stretch tab-position="left" type="card">
    <el-tab-pane>
      <template #label>{{ $t("input_page.input_from_cli") }}</template>
      <div class="input_page_content_area">
        <div class="start_input_button">
          <el-button :disabled="is_importing"
                     @click="start_input(input_type.cli)"
          >
            <el-icon>
              <promotion></promotion>
            </el-icon>
            {{ $t("input_page.start_input") }}
          </el-button>
        </div>
        <!---->
        <div class="input-area">
          <el-input
              v-model="input_data[input_type.cli]"
              :autosize="{minRows:10,maxRows:20}"
              :placeholder="$t('input_page.please_input_cli_command')"

          >
          </el-input>
        </div>

      </div>
    </el-tab-pane>
    <!--json-->
    <el-tab-pane>
      <template #label>{{ $t("input_page.json.input_from_json") }}</template>


      <div class="input_page_content_area">
        <div class="start_input_button">
          <el-button :disabled="is_importing"
                     @click="start_input(input_type.json)"
          >
            <el-icon>
              <promotion></promotion>
            </el-icon>
            {{ $t("input_page.start_input") }}
          </el-button>

        </div>

        <div class="input-area">
          <el-input
              v-model="input_data[input_type.json]"
              :autosize="{minRows:10,maxRows:20}"
              :placeholder="$t(`input_page.json.please_input_json`)"


          >

          </el-input>
        </div>
      </div>

    </el-tab-pane>

  </el-tabs>

</template>

<style lang="scss" scoped>
.input_page_content_area {
  height: 60vh;
  margin: 10px 5px;
  border-radius: 12px;
  background: var(--card-background);


}

.input-area {
  display: flex;
  height: 80%;
  margin: 15px 60px;
}

.start_input_button {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px; //这里因为div是在button外面所以用padding
  padding-right: 10px;
}

</style>