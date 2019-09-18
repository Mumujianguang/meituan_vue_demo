<template>
    <div class="search-box">
        <el-row class="search-bar">
            <el-col class="logo" :span="8">
                <router-link to="/">
                    <img src="@/assets/images/logo.png" alt="">
                </router-link>
            </el-col>
            <el-col class="search" :span="16">
                <div class="search-inp">
                    <input type="text" placeholder="搜索商家或地点" v-model="searchWord" @focus="focus" @blur="blur">
                    <button class="search-btn">
                        <i class="el-icon-search"></i>
                    </button>
                    <dl class="blank-show" v-if="isBlankShow">
                        <dt>热门搜索</dt>
                        <dd>
                            <router-link to="/s" v-for="(item, index) in hotWordList.slice(0, 3)" :key="index + Math.random()">{{ item.value }}</router-link>
                        </dd>
                    </dl>
                    <dl class="search-show" v-if="isSearchShow">
                        <router-link tag="dd" to="/s" v-for="(item, index) in searchList" :key="index">{{ item }}</router-link> 
                    </dl>
                </div>
                <ul class="hot-word">
                    <li class="small-show" v-for="item in hotWordList.slice(0, 4)" :key="item.id + Math.random()">
                        <a href="#">{{ item.value }}</a>
                    </li>
                    <li class="big-show" v-for="item in hotWordList.slice(0, 5)" :key="item.id + Math.random()">
                        <a href="#">{{ item.value }}</a>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data () {
        return {
            hotWordList: [
                { 
                    value: '大熊猫繁育研究基地',
                    id: 0
                }, {
                    value: '成都欢乐谷',
                    id: 1
                }, {
                    value: '诺亚方舟',
                    id: 2
                }, {
                    value: '成都海昌极地海洋公园',
                    id: 3
                }, {
                    value: '国色天乡一期童话世界',
                    id: 4
            }],
            searchList: [1, 2, 3, 4, 5],
            isFocus: false,
            searchWord: ''
        }
    },
    computed: {
        isSearchShow () {
            return this.isFocus && this.searchWord !== '';
        },
        isBlankShow () {
            return this.isFocus && this.searchWord === '';
        }
    },
    methods: {
        focus () {
            this.isFocus = true;
        },
        blur () {
            setTimeout(() => {
                 this.isFocus = false;
            }, 200);
        }
    }
}
</script>

<style lang="less">
    @color-hover: #FE8C00;
    .search-box {
        width: 100%;
        background-color: #fff;
        .search-bar {
            position: relative;
            display: block;
            width: 1190px;
            height: 157px;
            margin: 0 auto;
            padding-bottom: 35px;
            .logo {
                width: 240px;
                padding: 28px 40px 40px 0; 
                img {
                    width: 126px;
                    height: 46px;
                }
            }
            .search {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 550px;
                margin-top: 28px;
                z-index: 999;
                .search-inp {
                    input {
                        width: 85%;
                        height: 40px;
                        padding: 15px;
                        border: 1px solid #E5E5E5;
                        box-sizing: border-box;
                        outline: none;
                        vertical-align: top;
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px; 
                    }
                    button {
                        width: 15%;
                        height: 40px;
                        background: #FFC300;
                        font-size: 24px;
                        border: none;
                        outline: none;
                        border-top-right-radius: 5px;
                        border-bottom-right-radius: 5px;
                    }
                    .mix-show () {
                        position: absolute;
                        border: 1px solid rgb(219, 219, 219);
                        background-color: #fff;
                        width: 85%;
                        box-sizing: border-box;
                    }
                    .search-show {
                        .mix-show();
                        dd {
                            padding: 5px 10px;
                            &:hover {
                                color: @color-hover;
                                background-color: rgb(235, 235, 235);
                            }
                        }
                    }
                    .blank-show {
                        .mix-show();
                        padding: 10px;
                        dt {
                            color: rgb(134, 134, 134);
                            margin-bottom: 10px;
                        }
                        dd {
                            a {
                                color: #666;
                                margin: 5px;
                                &:hover {
                                    color: @color-hover;
                                }
                            }
                        }
                    }
                }
            }
            .hot-word {
                li {
                    float: left;
                    margin: 6px;
                    a {
                        color: #999;
                        &:hover {
                            color: @color-hover;
                        }
                    }
                }
                .big-show {
                    display: block;
                }
                .small-show {
                    display: none;
                }
            }
        }
        @media screen and (max-width: 1190px) {
            .search-bar {
                width: 960px;
                .search {
                    width: 420px;
                    .big-show {
                        display: none;
                    }
                    .small-show {
                        display: block;
                    }
                }
            }
        }
    }
</style>