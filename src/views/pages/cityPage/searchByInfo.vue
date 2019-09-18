<template>
    <div class="search-by-info">
        <div class="search-by-province-box">
            <p>按省份选择：</p>
            <div class="search-list">
                <select-list type="province" 
                             @province_selected="province_selected"
                             :provinceList="provinceList" />
                <select-list ref="cityList" 
                             type="city"
                             :provinceList="provinceList" />
            </div>
        </div>
        <div class="search-box">
            <p>直接搜索：</p>
            <el-input  placeholder="请输入城市中文和拼音" />
        </div>
    </div>
</template>

<script>
import selectList from './provinceList'
export default {
    props: ['provinceList'],
    components: {
        selectList
    },
    data () {
        return {
            
        }
    },
    methods: {
        province_selected (item) {
            this.$refs.cityList.userable = true;
            this.$refs.cityList._province = item;
            this.$refs.cityList.curProvince = '城市';
        }
    }
}
</script>

<style lang="less">
    .search-by-info {
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-bottom: 30px;
        .search-by-province-box {
            display: flex;
            flex-basis: 443px;
            flex-shrink: 0;
        }
        .search-box {
            display: flex;
            flex-basis: 310px;
            flex-shrink: 0;
            margin-left: 30px;
            p {
                flex-shrink: 0;
            }
        }
    }
    
</style>