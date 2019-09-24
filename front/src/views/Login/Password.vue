<template>
    <div class="password">
        <login-header>
            <el-form slot="container">
                <div class="title">
                    <h3>パスワード再発行</h3>
                </div>
            </el-form>
        </login-header>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import LoginHeader from "./LoginHeader.vue"
@Component({
    components:{
        LoginHeader
    }
})
export default class Password extends Vue{}
</script>

<style scoped lang="scss">
    .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }

    i {
        font-size: 14px;
        margin-left: 8px;
    }
    .forget {
        float: right;
    }
</style>
