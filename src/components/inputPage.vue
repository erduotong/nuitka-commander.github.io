<script setup>
/**
 * @overview 导入页面
 */
import {Promotion} from "@element-plus/icons-vue";
import {ref} from "vue"
import {input_type} from "@/values/enums.js";
import {ElMessage} from "element-plus";
import * as constants from "@/values/constants.json";
import {parsers} from "@/modules/input_parsers.js";

const input_data = ref({
  cli: "",
});

const is_importing = ref(false);
// type为input_type
const start_input = async (type) => {
  if (is_importing.value) {
    ElMessage({
      type: "warning",
      message: "(to i18n) 已经在调用了!!",
      showClose: true,
      duration: constants.message_duration,
    });
    return;
  }

  is_importing.value = true;
  const result = await parsers[type](input_data[type]);
  console.log(result)
  is_importing.value = false;
}
</script>

<template>
  <el-tabs stretch tab-position="left" type="card">
    <el-tab-pane>
      <template #label>{{ $t("input_page.input_from_cli") }}</template>
      <div class="input_page_content_area">
        <div id="cli_input_button">
          <el-button :disabled="is_importing"
                     @click="start_input(input_type.cli)"
          >
            <el-icon>
              <promotion></promotion>
            </el-icon>
            {{ $t("input_page.start_input") }}
          </el-button>
        </div>

        <div id="cli_input">
          <el-input
              v-model="input_data.cli"
              :autosize="{minRows:10,maxRows:20}"
              :placeholder="$t('input_page.please_input_cli_command')"
              type="textarea"
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
  background: #1f1e33;

  #cli_input_button {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px; //这里因为div是在button外面所以用padding
    padding-right: 10px;
  }

  #cli_input {
    margin: 15px 60px;
  }
}
</style>