<template>
    <div class="layout">
        <!--header-->
        <layout-header></layout-header>
        <!--内容-->
    </div>
</template>

<script>
import {Component,Vue } from 'vue-property-decorator'
import layoutHeader from "@/views/Layout/LayoutHeader.vue";
@Component({
    components: {layoutHeader},
})
export default class Layout extends Vue{}
</script>

<style scoped lang="scss">
.layout{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #f5f7f9;
}
</style>
