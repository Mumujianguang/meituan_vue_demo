<template>
    <el-container class="wrapper">
        <el-header height="200px">
            <my-header />
        </el-header>
        <el-main>
            <router-view />
        </el-main>
        <el-footer>
            <my-footer />
        </el-footer>
    </el-container>
</template>

<script>
import myHeader from '@/components/header/index';
import myFooter from '@/components/footer/index';
export default {
    components: {
        myHeader,
        myFooter,
    }
};
</script>


<style:<style lang="less">
    .wrapper {
        width: 100%;
        height: 100%;
        .el-header,
        .el-main,
        .el-footer {
            padding: 0;
        }
        .el-main {
            overflow: visible;
        }
    }
</style>
