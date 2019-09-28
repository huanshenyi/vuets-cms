<template>
    <div class="home">
        <div class="home-body">
            <h4 class="title">Vue.js + TypeScript CMS</h4>
            <p class="des">今はapi管理と可視化に使用する</p>
            <el-button @click="goRepositorie">
                リポジトリ
            </el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component({
    components:{}
})
export default class Home extends Vue {
    goRepositorie():void{
        window.open("https://github.com/huanshenyi/vuets-cms")
    }
}
</script>

<style scoped lang="scss">
    .home {
        width: 100%;
        height: 100%;
        background: url(../assets/bg.jpg) no-repeat;
        background-size: 100% 100%;
    .home-body {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        color: #fff;
        text-align: center;
        padding: 100px;
        box-sizing: border-box;
    .title {
        font-size: 32px;
        font-weight: bold;
        line-height: 60px;
    }
    .des {
        font-size: 18px;
        margin: 40px 0;
    }
    }
    }
</style>
