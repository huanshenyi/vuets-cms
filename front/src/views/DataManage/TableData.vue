<template>
    <div>TableData</div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator"
@Component({
   components:{}
})
export default class TableData extends Vue {
@Provide() searchVal:string = ""; //検索input value
@Provide() tHeight:number = document.body.offsetHeight-270;//見えるテーブルの高さ
@Provide() tableData: any = []; //table表示するデータ
@Provide() page: number = 1; //現在のページ
@Provide() size: number = 5; //リクエストデータの数
@Provide() total: number = 0; //合計データ数
}
</script>

<style scoped>

</style>
