<script setup>
import LoadingPage from "@/components/untils/loadingPage.vue";
import WebsiteHeader from "@/components/websiteHeader.vue";
import WebsiteFooter from "@/components/websiteFooter.vue";
import NavBar from "@/components/navBar.vue";
import {Edit, Share, Upload} from "@element-plus/icons-vue";
import CommandEdit from "@/components/commandEdit.vue";
import {user_options} from "@/vals/stores/user_options.js";
import OutputPage from "@/components/outputPage.vue";
</script>

<template>

  <loading-page></loading-page>
  <header>
    <website-header></website-header>
  </header>

  <nav>
    <nav-bar></nav-bar>
  </nav>


  <main>

    <el-tabs v-model="user_options.action_tab" stretch tab-position="right">
      <el-tab-pane name="input">
        <template #default>
          前面的区域，以后再来探索吧
        </template>
        <template #label>
          <el-icon size="25" style="margin-right: 10px">
            <upload></upload>
          </el-icon>
          {{ $t(`tabs.input`) }}
        </template>

      </el-tab-pane>

      <el-tab-pane name="output">
        <template #default>
          <output-page></output-page>
        </template>
        <template #label>
          <el-icon size="25" style="margin-right: 10px">
            <share></share>
          </el-icon>
          {{ $t(`tabs.output`) }}
        </template>

      </el-tab-pane>


      <el-tab-pane name="edit">
        <template #default>
          <command-edit></command-edit>
        </template>
        <template #label>
          <el-icon size="25" style="margin-right: 10px">
            <edit></edit>
          </el-icon>
          {{ $t("tabs.edit") }}
        </template>

      </el-tab-pane>

    </el-tabs>

  </main>

  <!---->
  <footer>
    <website-footer></website-footer>
  </footer>


</template>


<style lang="scss" scoped>
main {
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;

}

</style>