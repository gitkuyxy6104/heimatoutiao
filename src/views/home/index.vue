<template>
 <el-container>
   <el-aside style="background-color:#353b4e;min-height:100vh;width:230px">
     <a-lista ></a-lista>
   </el-aside>
   <el-container>
     <el-header>
       <a-header></a-header>
     </el-header>
     <el-main>内容</el-main>
   </el-container>
 </el-container>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style lang='less' scoped>
.el-aside{
  overflow: hidden;
}
</style>
