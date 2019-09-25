<template>
    <div class="password">
        <login-header>
            <el-form
                    slot="container"
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-position="left"
                    label-width="0px"
            >
                <div class="title">
                    <h3>パスワード再発行</h3>
                </div>
                <!--ユーザーネーム-->
                <el-form-item prop="username">
                    <el-input type="text"
                              v-model="ruleForm.username"
                              auto-complete="off"
                              placeholder="ユーザーネーム"
                    >
                        <i slot="prefix" class="el-icon-user"></i>
                    </el-input>
                </el-form-item>
                <!--email-->
                <el-form-item prop="email">
                    <el-input type="text"
                              v-model="ruleForm.email"
                              auto-complete="off"
                              placeholder="アドレス"
                    >
                        <i slot="prefix" class="el-icon-message"></i>
                    </el-input>
                </el-form-item>
                <!--button-->
                <el-form-item>
                    <el-button
                            :loading="loading"
                            type="primary"
                            style="width: 100%"
                            @click.native.prevent="handleSubmit"
                    >
                        送信
                    </el-button>
                </el-form-item>
            </el-form>
        </login-header>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator"
import LoginHeader from "./LoginHeader.vue"
@Component({
    components:{
        LoginHeader
    }
})
export default class Password extends Vue{
    @Provide() loading:boolean = false;
    @Provide() ruleForm:{
        username:string;
        email:string;
    }= {
        username: "",
        email: ""
    };
    @Provide()　rules = {
        username:[
            { required: true, message: 'ユーザーネームを入力してください', trigger: 'blur' },
        ],
        email:[
            { required: true, message: 'アドレスを入力してください', trigger: 'blur'},
            { type:"email", message: 'アドレスの形式誤りがあります', trigger: 'blur, change'}
        ]
    };
    handleSubmit():void{
        (this.$refs.ruleForm as any).validate((valid:boolean)=>{
            if (valid){
                this.loading = true;
                // リクエスト
                (this as any).$axios.post("/api/users/findPwd", this.ruleForm).then((res:any)=>{
                    this.loading = false;
                    console.log(res.data);
                    this.$message({
                        //message:res.data.msg,
                        message:"メール発送されました",
                        type: "success"
                    });
                    this.$router.push("/login");
                }).catch((err:any)=>{
                    console.log(err);
                    this.loading = false
                })
            }
        })
    }
}
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
</style>
