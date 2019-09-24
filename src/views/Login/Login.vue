<template>
    <div id="login">
        <login-header>
            <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-position="left"
                    label-width="0px"
                    slot="container"
            >
                <div class="title">
                    <h3>ログイン</h3>
                </div>
                <!--username-->
                <el-form-item prop="username">
                    <el-input
                            type="text"
                            v-model="ruleForm.username"
                            placeholder="ユーザーネーム"
                            auto-complete="off">
                        <i slot="prefix" class="el-icon-user"></i>
                    </el-input>
                </el-form-item>
                <!--password-->
                <el-form-item prop="pwd">
                    <el-input
                            type="password"
                            v-model="ruleForm.pwd"
                            placeholder="パスワード"
                            auto-complete="off">
                        <i slot="prefix" class="el-icon-lock"></i>
                        <!--時間あれば、ここにアイコン入れよう-->
                        <!--例 <i slot="prefix" class="el-input__icon el-icon-search"></i>-->
                    </el-input>
                </el-form-item>
                <!--ログインボタン-->
                <el-form-item>
                    <!--click.native.preventデフォルト事件を消す-->
                    <el-button :loading="isLogin" type="primary" style="width: 100%;" @click.native.prevent="handleSubmit">
                        ログイン
                    </el-button>
                </el-form-item>
                <!--一週間自動ログインとパスワード再発行-->
                <el-form-item>
                    <el-checkbox v-model="ruleForm.autoLogin" :checked="ruleForm.autoLogin">ログイン状態維持</el-checkbox>
                    <el-button @click="$router.push('/password')" type="text" class="forget">パスワード再発行</el-button>
                </el-form-item>
            </el-form>
        </login-header>
    </div>
</template>

<script lang="ts">
import {Component ,Vue, Provide} from "vue-property-decorator"
import LoginHeader from "./LoginHeader.vue"
import any = jasmine.any;
@Component({
    components:{
        LoginHeader,
    }
})
export default class Login extends Vue{
    @Provide() isLogin:boolean = false;
    @Provide() ruleForm:{
        username : String;
        pwd : String;
        autoLogin : boolean;
    } = {
        username : "",
        pwd: "",
        autoLogin: true
    };
    @Provide()　rules = {
        username:[
            { required: true, message: 'ユーザーネームを入力してください', trigger: 'blur' },
        ],
        pwd:[
            { required: true, message: 'パスワードを入力してください', trigger: 'blur' },
        ]
    };
    handleSubmit():void{
        (this.$refs.ruleForm as any).validate((valid:boolean)=>{
            if(valid){
                this.isLogin = true;
                // console.log("検証通過");
                (this as any).$axios.post("/api/users/login",this.ruleForm).then((res:any) => {
                    this.isLogin = false;
                    // console.log(res.data)
                    //tokenを保存
                    localStorage.setItem("tsToken", res.data.token);
                }).catch(()=>{
                    this.isLogin = false
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
    .forget {
        float: right;
    }
</style>
