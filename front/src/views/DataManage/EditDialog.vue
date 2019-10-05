<template>
     <el-dialog title="内容編集" :visible.sync="dialogVisible" :show-close="close">
       <el-form ref="ruleForm" v-model="form" label-width="100px" size="small" class="form-box">
           <el-form-item label="Api名称" prop="title">
               <el-input v-model="form.title" placeholder="apiの名称を入力してください"></el-input>
           </el-form-item>
           <el-form-item label="type" prop="type">
               <el-input v-model="form.type" placeholder="apiのタイプを入力してください"></el-input>
           </el-form-item>
       </el-form>
     </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide } from "vue-property-decorator";

@Component({
    components: {}
})
export default class EditDialog extends Vue{
    // !: -> Tsのインタプリタにこれ必ず値があることを声明
  @Prop(Boolean) dialogVisible!:boolean;
  @Prop(Object) form!:{
      title:string,
      type:string,
      level:string,
      count:string,
      date:string,
      _id:string
  };
  created(){
      console.log(this.dialogVisible,this.form);
  }
}
</script>

<style scoped>

</style>
