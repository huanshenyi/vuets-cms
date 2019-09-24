import axios, { AxiosResponse, AxiosRequestConfig } from "axios"
import { Message } from "element-ui"
import router from "@/router"

/**
 * httpモジュールは
 * AxiosRequestConfig フロントエンドのtokenをヘットに入れてサーバエンドに渡す
 * AxiosResponse グローバルで通信エラーを処理
 */

// axiosのインスタンスを初期化

const service = axios.create({
    timeout:10000 //タイムアウト
});

// リクエストインタプリタ
service.interceptors.request.use(
    (config:AxiosRequestConfig)=>{
    if(localStorage.tsToken){
        config.headers.Authorization = localStorage.tsToken;
    }
    return config
},(err:any)=>{
    Promise.reject(err);
});

//リスポンスインタプリタ
service.interceptors.response.use((response:AxiosResponse)=>{
    return response;
},(err:any)=>{
    let errMsg:string = "";
    if(err && err.response.status){
        switch (err.response.status) {
            case 401:
                localStorage.removeItem("tsToken");
                router.push("/login");
                errMsg = "ログイン状態タイムアウト,再度ログインしてください";
                break;
            case 403:
                errMsg = "アクセス拒否されました";
                break;
            case 408:
                errMsg = "リクエストタイムアウト";
                break;
            case 500:
                errMsg = "サーバーエラー";
                break;
            case 501:
                errMsg = "サーバーでメソッドが実装されていません";
                break;
            case 502:
                errMsg = "プロキシエラー";
                break;
            default:
                errMsg = err.response.data.msg;
                break;
        }
    }else {
        errMsg = err;
    }
    Message.error(errMsg);
    return Promise.reject(errMsg);
});

export default service;
