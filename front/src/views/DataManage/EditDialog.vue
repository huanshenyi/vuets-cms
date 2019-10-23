<template>
     <el-dialog :close-on-click-modal="false" :show-close="false" title="内容編集" :visible.sync="dialogVisible">
       <el-form ref="ruleForm" v-model="form" label-width="100px" size="small" class="form-box">
           <el-form-item label="Api名称" prop="title">
               <el-input v-model="form.title" placeholder="apiの名称を入力してください"></el-input>
           </el-form-item>
           <el-form-item label="level" prop="level">
               <el-select v-model="form.level" placeholder="apiのタイプを入力してください">
                   <el-option label="入門" value="入門"></el-option>
                   <el-option label="中級" value="中級"></el-option>
                   <el-option label="上級" value="上級"></el-option>
               </el-select>
           </el-form-item>
           <el-form-item label="使用数" prop="count">
               <el-input v-model="form.count" placeholder="使用数を入力してください"></el-input>
           </el-form-item>
           <el-form-item label="時間" prop="date">
               <el-date-picker
                       type="date"
                       placeholder="日時を選択"
                       v-model="form.date"
                       value-format="yyyy-MM-dd"
               ></el-date-picker>
           </el-form-item>
           <el-form-item label="専攻" prop="type">
               <el-radio-group v-model="form.type">
                   <el-radio label="vue" name="type"></el-radio>
                   <el-radio label="react" name="type"></el-radio>
                   <el-radio label="node" name="type"></el-radio>
                   <el-radio label="python" name="type"></el-radio>
                   <el-radio label="angler" name="type"></el-radio>
               </el-radio-group>
           </el-form-item>
       </el-form>
         <span slot="footer" class="dialog-footer">
             <el-button @click="$emit('closeDialog')" size="small">閉じる</el-button>
             <el-button type="primary" size="small">確定</el-button>
         </span>
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
  @Provide() rules:any = {
    title:[{required:true,message:"タイトルを入力してください",trigger:"blue"}],
  };
  created(){
  }
}
</script>

<style scoped lang="scss">
.form-box{
    .el-input,
    .el-select{
        width: 200px !important;
    }
}
</style>
