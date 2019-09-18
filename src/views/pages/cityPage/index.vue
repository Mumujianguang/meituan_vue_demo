<template>
    <div class="city-page">
        <el-row>
            <search-by-info :provinceList="provinceList" />
        </el-row>
        <el-row>
            <hot-city type="热门城市：" :hotCityList="hotCityList" />
        </el-row>
        <el-row>
            <hot-city type="最近访问：" :hotCityList="recentList" />
        </el-row>
        <el-row>
            <all-city-list :keyList="keyList" 
                           :allCityList="allCityList"
                           :provinceList="provinceList" />
        </el-row>
    </div>
    
</template>

<script>
import axios from 'axios'
import hotCity from './hotCity'
import searchByInfo from './searchByInfo'
import allCityList from './allCityList'
import allCityListVue from './allCityList.vue';
export default {
    components: {
        hotCity,
        searchByInfo,
        allCityList
    },
    data () {
        return {
            keyList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'],
            hotCityList: [],
            recentList: [],
            provinceList: [],
            allCityList: {}
        }
    },
    created () {
        this.getData('/api/meituan/city/cityList.json')
            .then(res => {
                // console.log(res);
                this.hotCityList = res.data.data
            });
        this.getData('/api/meituan/city/recents.json')
            .then(res => {
                // console.log(res);
                this.recentList = res.data.data
            })
        this.getData('/api/meituan/city/province.json')
            .then(res => {
                // console.log(res.data.data);
                this.provinceList = res.data.data;
                this.dealData();
            })
    },
    methods: {
        getData (url, data) {
            return axios
                    .get('http://api.duyiedu.com' + url, {
                        params: {
                            appkey: '1419479392_1553871312917',
                            ...data
                        }
                    })
            
        },
        dealData () {
            const allCityList = this.allCityList;
            for (let i = 0; i < this.provinceList.length; i++) {
                const cityInfoList = this.provinceList[i].cityInfoList;
                const provinceName = this.provinceList[i].provinceName;
                cityInfoList.forEach(ele => {
                    const key = ele.firstChar;
                    if (!allCityList[key]) {
                        allCityList[key] = [];
                    }
                    for (let prop in allCityList) {
                        if (key === prop) {
                            allCityList[prop].push({ provinceName, name: ele.name })
                        }
                    }
                })
            }
            this.sort();
        },
        sort () {
            let temp = {};
            const allCityList = this.allCityList;
            this.keyList.forEach(ele => {
                temp[ele] = allCityList[ele]
                
            })
            console.log(temp)
            this.allCityList = temp;
        }
    }
}
</script>

<style lang="less">
    .city-page {
        width: 1190px;
        margin: 20px auto;
        padding: 15px;
        background-color: #fff;
        border: 1px solid rgb(224, 224, 224);
        border-radius: 5px;
        & > div {
            border-bottom: 1px solid rgb(235, 235, 235);
        }
    }
</style>
