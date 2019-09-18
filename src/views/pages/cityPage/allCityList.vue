<template>
    <div class="all-city">
        <div class="all-city-nav">
            <p class="nav-title">按拼音首字母选择：</p>
            <ul class="nav-box">
                <li class="nav-item"
                    v-for="(item, index) in keyList"
                    :key="index">
                    <a :href="'#' + item">{{ item }}</a>    
                </li>
            </ul>
        </div>
        <ul class="all-city-content">
            <li class="per-group"
                v-for="(value, key) in allCityList"
                :key="value + key">
                <div class="group-title">{{ key }}</div>
                <dl class="group-content" :id="key">
                    <router-link 
                        tag="dd" 
                        class="per-city"
                        to="/main" 
                        v-for="(item, index) in value"
                        :key="item.name + index"
                        @click.native='changeCity(item)'
                        >{{ item.name }}</router-link>
                </dl>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { changeCity } from '@/tool.js'
export default {
    props: ['keyList', 'allCityList', 'provinceList'],
    data () {
        return {
            
        }
    },
    methods: {
        changeCity, 
        ...mapMutations(['setCurCity'])
    }
}
</script>

<style lang="less">
    .all-city {
        padding: 30px 0; 
        .all-city-nav {
            height: 25px;
            line-height: 25px;
            padding-bottom: 30px; 
            .nav-title {
                float: left;
            }
            .nav-box {
                float: left;
                display: flex;
                font-size: 14px; 
                .nav-item {
                    margin: 0 17px;  
                    a {
                        color: #666;
                        &:hover {
                            color: #222;
                            cursor: pointer;
                        }
                    }
                    
                }
            }
        }
        .all-city-content {
            padding: 10px;
            .per-group {
                display: flex;
                padding: 13px 10px;
                &:hover {
                    background-color: rgb(240, 240, 240);
                    transition: background-color .3s linear;
                }
                .group-title {
                    width: 40px;
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    background-color: #FFD000;
                    border-radius: 50%;
                    flex-shrink: 0;
                }
                .group-content {
                    display: flex;
                    flex-wrap: wrap;
                    font-size: 14px;
                    margin: 5px 0 0 5px;
                    .per-city {
                        padding: 5px;
                        margin: 0 15px;
                        color: #666;
                        &:hover {
                            color: #222;
                            cursor: pointer;
                        }
                    }
                }
                
            }
        }
        
    }
</style>