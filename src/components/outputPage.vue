<script setup>
import {CopyDocument} from "@element-plus/icons-vue";
import {use_command} from "@/modules/use_command.js";
import {computed} from "vue";
import CliCommandCard from "@/components/command_cards/cliCommandCard.vue";

/**
 * 复制所选内容到剪贴板
 * @param type {string} 要复制的类型
 * @return {Promise<void>}
 */
const on_copy = async (type) => {
  try {
    await navigator.clipboard.writeText(output.value[type]);
    console.log("copied");
  } catch (err) {
    console.error(`Failed to copy\nType:${type}\nError:\n`, err);
  }

};
const output = computed(() => {
  const result = {
    cli: "python -m nuitka ",
    json: JSON.stringify(use_command.storage_config.value, null, 2),
    pyproject: "",
  };
  Object.keys(use_command.output.value).forEach((key) => {
    const value = use_command.output.value[key];
    result.cli += value.cli + " ";
  });
  return result;
});
</script>

<template>
  <div>
    <el-tabs stretch tab-position="left" type="card">
      <el-tab-pane>
        <template #label>{{ $t("output_page.CLI") }}</template>
        <div id="cli_output_area">
          <span class="copy_button">
            <el-button round @click="on_copy('cli')">
               <el-icon><CopyDocument /></el-icon>
            </el-button>
          </span>
          <div id="cli_output">
            <cli-command-card
                :desc="$t('output_page.run_nuitka_through_python')"
                :show="true"
                command="python -m nuitka"
                name=""
            >

            </cli-command-card>
          </div>
        </div>
      </el-tab-pane>

      <!--<el-tab-pane>-->
      <!--  <template #label>pyproject</template>-->
      <!--  <div id="pyproject_output"></div>-->
      <!--</el-tab-pane>-->
      <el-tab-pane>
        <template #label>{{ $t("output_page.JSON") }}</template>
        <div id="json_output_area">
            <span class="copy_button">
            <el-button round @click="on_copy('json')">
               <el-icon><CopyDocument /></el-icon>
            </el-button>
          </span>
          <el-text>
            <pre>
              <code style=" white-space: pre-wrap;">{{ use_command.storage_config }}</code>
            </pre>
          </el-text>

        </div>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<style lang="scss" scoped>
.copy_button {
  position: absolute;
  top: 15px;
  right: 15px;
}

#cli_output_area {

  margin: 10px 5px;
  border: 1px solid var(--el-border-color);
  border-radius: 12px;
  background: var(--card-background);
  box-shadow: var(--card-shadow) 0 3px 8px;

  #cli_output {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 25px 20px;
    gap: 0;
  }

}

#json_output_area {
  min-height: 50px;
  margin: 10px 5px;
  padding: 10px 20px;
  border: 1px solid var(--el-border-color);
  border-radius: 12px;
  background: var(--card-background);
  box-shadow: var(--card-shadow) 0 3px 8px;

}

</style>