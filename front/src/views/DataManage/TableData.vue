<template>
    <div class="table-data">
        <div class="search-box">
            <el-input size="small" v-model="searchVal" placeholder="検索したいApiを入力してください"></el-input>
            <el-button size="small" type="primary">
                <i class="el-icon-search" @click="handleSearch">検索</i>
            </el-button>
        </div>
        <el-table :data="tableData" border style="width: 100%" :height="tHeight" class="table-box">
            <el-table-column type="index" label="id" width="60"></el-table-column>
            <el-table-column label="名称" prop="title"></el-table-column>
            <el-table-column label="Api" prop="level"></el-table-column>
            <el-table-column label="cookie" prop="type"></el-table-column>
            <el-table-column label="新規時間" prop="data" width="160"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">編集</el-button>
                    <el-button size="mini" type="danger">削除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pages" ref="page-box">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-sizes="[5,10,20]"
                    :page-size="size"
                    layout="total,sizes,prev,pager,next,jumper"
                    :total="total">
            </el-pagination>
        </div>
        <EditDialog
                :dialogVisible="dialogVisible"
                :form="formData">
        </EditDialog>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator"
import EditDialog from "./EditDialog.vue"

@Component({
   components:{ EditDialog }
})
export default class TableData extends Vue {
@Provide() searchVal:string = ""; //検索input value
@Provide() tHeight:number = document.body.offsetHeight-270;//見えるテーブルの高さ
@Provide() tableData: any = []; //table表示するデータ
@Provide() page: number = 1; //現在のページ
@Provide() size: number = 5; //リクエストデータの数
@Provide() total: number = 0; //合計データ数
@Provide() dialogVisible:Boolean = false; //編集画面見せるか
@Provide() formData:object = {
  title: "",
  type: "",
  level: "",
  count: "",
  date: ""
};
    handleEdit(index:number,row:any){
        console.log(index, row);
        this.formData = row;
        this.dialogVisible = true;
}
    created(){
        this.loadData();
    }
    loadData(){
        (this as any).$axios(`/api/profiles/loadMore/${this.page}/${this.size}`).then((res:any)=>{
            console.log(res.data);
            this.tableData = [{_id:1,title:"apitest",type:'test',level:"test",data:"2019-06-13"},
                {id:1,title:"apitest",type:'test',level:"test",data:"2019-06-13"}];
            this.total = res.data.data.total;
        })
    }
    handleSizeChange(val:number):void{
        this.size = val;
        this.page = 1;
        this.loadData();
    }
    handleCurrentChange(val:number):void{
        this.page = val;
        console.log(this.page);
        this.loadData();
    }
    handleSearch():void{
        //
        console.log("");
        this.page = 1;
        this.searchVal ? this.loadSearchData() : this.loadData();
    }
    loadSearchData(){
        //search data をlord
        (this as any).$axios(`/api/profiles/search/${this.searchVal}/${this.page}/${this.size}`).then((res:any)=>{
            console.log(res.data);
            this.tableData = res.data.datas.list;
            this.total = res.data.datas.total;
        })
    }
}
</script>

<style scoped lang="scss">
    .table-data {
        height: 100%;
    .table-box {
        font-size: 14px;
    }
    .pages {
        background: #fff;
        margin-top: 10px;
        padding: 10px 10px;
        text-align: right;
        height: 55px;
        box-sizing: border-box;
    }
    .search-box {
        background: #fff;
        margin-bottom: 10px;
        padding: 10px 10px;
        border-radius: 4px;
        height: 55px;
        box-sizing: border-box;
    .el-input {
        width: 200px;
        margin-right: 10px;
    }
    }
    }
</style>
