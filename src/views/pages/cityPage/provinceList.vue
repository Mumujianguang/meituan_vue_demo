<template>
    <div class="province-cmp" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <span class="cur-province">{{ curProvince }}</span>
        <i class="el-icon-caret-bottom"></i>
        <div :class="{select_province: type === 'province', select_city: type === 'city'}" 
             v-show="isShow">
            <p>{{ this.type === 'province' ? '省份' : '城市' }}</p>
            <div class="province-list" v-if="type === 'province'">
                <span 
                      :class="{province_item: true, active: curProvince === item}"
                      @click="chooseProvince(item)"
                      v-for="(item, index) in renderList"
                      :key="item + index">{{ item }}</span>
            </div>
            <div class="province-list" v-else-if="type === 'city'">
                <router-link
                      tag="span"
                      to="/main" 
                      :class="{province_item: true, active: curProvince === item}"
                      @click.native="chooseProvince(item)"
                      v-for="(item, index) in renderList"
                      :key="item + index">{{  item.name }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { setTimeout, clearTimeout } from 'timers';
import axios from 'axios';
import { mapMutations } from 'vuex';
import { changeCity } from '@/tool.js'
export default {
    props: ['type', 'provinceList'],
    data () {
        return {
            isShow: false,
            curProvince: this.type === 'province' ? '省份' : '城市',
            itemClick: false,
            renderList: [],
            timer: null,
            userable: false,
            _province: ''
        }
    },
    methods: {
        mouseenter () {
            if (this.type === 'city') {
                if (this.userable) {
                    this.isShow = true;
                    clearTimeout(this.timer);
                    // console.log(this._province);
                    this.query_cityNameList();
                }
            } else {
                if (this.type === 'province') {
                    this.query_provinceNameList();
                }
                this.isShow = true;
                clearTimeout(this.timer);
            }
            
        },
        mouseleave () {
            this.timer = setTimeout(() => {
                this.isShow = false;
            }, 100)
        },
        chooseProvince (item) {
            this.curProvince = (typeof item === 'object' ? item.name : item);
            this.itemClick = true;
            if (this.type === 'province') {
                this.$emit('province_selected', item)
            } else if (this.type === 'city') {
                this.changeCity(item)
                console.log(item);
            }
        },
        query_provinceNameList () {
            this.renderList = [];
            this.provinceList.forEach(ele => {
                this.renderList.push(ele.provinceName)
            })
        },
        query_cityNameList () {
            this.renderList = [];
            for (let i = 0; i < this.provinceList.length; i++) {
                const provinceName = this.provinceList[i].provinceName
                if (this._province === provinceName) {
                    this.provinceList[i].cityInfoList.forEach(ele => {
                        this.renderList.push({ provinceName, name: ele.name });
                    })
                    
                }
            }
        },
        changeCity,
        ...mapMutations(['setCurCity'])
    }
}
</script>

<style lang="less">
    .province-cmp {
        display: inline-block;
        position: relative;
        z-index: 10;
        width: 150px;
        border: 1px solid rgb(212, 212, 212);
        padding: 0 10px;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 14px;
        margin-left: 10px;
        .el-icon-caret-bottom {
            float: right;
            margin-top: 12px;
        }
        .mix-style () {
            position: absolute;
            height: 375px;
            background-color: #fff;
            left: 0px;
            margin-top: 10px;
            border: 1px solid rgb(204, 204, 204);
            border-radius: 5px;
            padding: 10px;
            box-sizing: border-box;
            p {
                color: #666;
            }
            .province-list {
                display: flex;
                flex-wrap: wrap;
                .province_item {
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    font-size: 12px;
                    padding: 3px;
                    cursor: pointer;
                    &.active {
                        background-color: #FFD000;
                        border-radius: 5px;
                    }
                }
            }
        }
        .select_province {
            .mix-style();
            width: 265px;
            .province-list {
                .province_item {
                    width: 30%;
                }
            }
        }
        .select_city {
            .mix-style();
            width: 758px;
            .province-list {
                .province_item {
                    width: 11%;
                }
            }
        }   
    }
</style>