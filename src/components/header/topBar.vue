<template>
    <div class="top-box">
        <el-row class="top-bar">
            <el-col :span="12">
                <location-bar />
            </el-col>
            <el-col :span="10" :offset="2">
                <nav-bar />
            </el-col>           
        </el-row>
    </div>
</template>

<script>
import locationBar from './locationBar'
import navBar from './navBar'
export default {
    components: {
        locationBar,
        navBar
    }
}
</script>


<style lang="less">
    .top-box {
        width: 100%;
        background-color: #F8F8F8;
        .top-bar {
            width: 1190px;
            height: 40px;
            line-height: 40px;
            color: #999;  
            margin: 0 auto;
        }
    }
    
</style>
