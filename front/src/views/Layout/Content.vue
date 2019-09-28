<template>
    <el-container class="layout-content">
        <!--左側のメニュー-->
        <el-aside width="200px">
            <slot name="left">

            </slot>
        </el-aside>
        <!--右側のページ-->
        <el-main>
            <!--パンくずリスト-->
            <div class="top">
                <i class="el-icon-s-unfold"></i>
                <el-breadcrumb class="breadcrumb" separator="/">
                    <el-breadcrumb-item
                            v-for="(item, index) in breadCrumbItems"
                            :key="index"
                            :to="{path:item.path}"
                    >
                        {{item.title}}
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <!--内容-->
            <div class="content">
                <slot name="content"></slot>
            </div>
        </el-main>
    </el-container>
</template>

<script lang="ts">
import { Component,Vue,Provide, Watch } from "vue-property-decorator"
@Component({
    components:{}
})
export default class Content extends Vue{
@Provide() breadCrumbItems:any;//パンくずリスト
@Watch("$route") handleRouteChange(to:any){
    this.initBreadCrumbItems(to);
}
created(){
  this.initBreadCrumbItems(this.$route);
}
initBreadCrumbItems(router:any):void{
    console.log(router);
    // ベースtitle
    let breadCrumbItems:any = [{path:"/",title:"ホーム"}];
    //親ルーターから子ルーターまでのtitle,pathをリストに保存
    for(const index in router.matched){
        if(router.matched[index].meta && router.matched[index].meta.title){
            breadCrumbItems.push({
                path:router.matched[index].path ? router.matched[index].path : "/",
                title:router.matched[index].meta.title
            })
        }
    }
    this.breadCrumbItems = breadCrumbItems;
    console.log(this.breadCrumbItems)
}
}
</script>

<style scoped lang="scss">
    .layout-content {
        width: 100%;
        height: 100%;
    .el-main {
        padding: 0;
    .top {
        background: #fff;
        height: 54px;
        border-right: none;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        align-items: center;
    i {
        font-size: 20px;
        cursor: pointer;
        padding-left: 16px;
    }
    .breadcrumb {
        padding-left: 16px;
    }
    }
    .content {
        padding: 10px;
        height: calc(100% - 54px);
        box-sizing: border-box;
    }
    }
    }
</style>
