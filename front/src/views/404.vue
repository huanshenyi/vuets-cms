<template>
    <div class="error-page">
        <div class="pic-404">
            <img class="pic-404_parent" src="@/assets/404_images/404.png" alt="404">
        </div>
        <div class="notFound">
            <span>ページ存在しません</span>
            <span>
                 u can try
                <a class="link" @click="$route.go(-1)" href="">Back</a>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
    components:{}
})
export default class Errors extends Vue{

}
</script>

<style scoped lang="scss">
.error-page {
        height: 100%;
        display: flex;
  .pic-404 {
        text-align: center;
        width: 60%;
        padding: 50px;
    .pic-404__parent {
        width: 600px;
    }
  }
    .notFound {
        padding: 150px 0;
        overflow: hidden;
    span {
        display: block;
        line-height: 60px;
        font-size: 18px;
        color: #8b7b8b;
    .link {
        color: #5cacee;
        font-size: 20px;
        cursor: pointer;
    }
    }
  }
}
</style>
