<template>
    <div class="left-banner">
        <dl class="all-list">
            <dt>全部分类</dt>
            <div class="all-list-item" v-for="(item, index) in dataList" :key="item + index">
                <i :class="item.icon"></i>
                <span class="item-list">
                    {{ item.title }}
                </span>
                <i class="el-icon-arrow-right right-icon"></i>
                <div class="per-list">
                    <div class="per-list-item" v-for="(v, k) in item.items" :key="v + k">
                        <div class="per-list-title">
                            <div class="theme">{{ v.title }}</div>
                            <div class="other">
                                <span>更多</span>
                                <i class="el-icon-arrow-right"></i>
                            </div>
                        </div>
                        <ul class="per-list-content" v-for="(cv, ck) in v.items" :key="cv + ck">
                            <li><a href="#">{{ cv }}</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </dl>
        
    </div>
    
    
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            dataList: [{
                title: '美食',
                icon: 'el-icon-fork-spoon left-icon',
                items: [{
                    title: '美食',
                    items: [
                        '代金券', '甜点饮品', '火锅自助餐', '小吃快餐', '日韩料理', 
                        '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', 
                        '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆'
                    ]
                }]
            },{
                title: '外卖',
                icon: 'el-icon-ice-tea left-icon',
                items: [{
                    title: '外卖',
                    items: ['美团外卖']
                }]
            },{
                title: '酒店',
                icon: 'el-icon-place left-icon',
                items: [{
                    title: '酒店星级',
                    items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                }]
            },{
                title: '棒果民宿',
                icon: 'el-icon-s-home left-icon',
                items: [{
                    title: '热门城市',
                    items: ['上海', '成都', '北京', '重庆', '南京', '杭州', '广州', '西安', '武汉', '厦门', '长沙', '青岛', '深圳', '天津', '苏州']
                },{
                    title: '热门房源',
                    items: ['复式Loft', '别墅']
                }]
            },{
                title: '猫眼电影',
                icon: 'el-icon-view left-icon',
                items: [{
                    title: '酒店星级',
                    items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                }]
            },{
                title: '机票 / 火车票',
                icon: 'el-icon-bicycle left-icon',
                items: [{
                    title: '酒店星级',
                    items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                }]
            },{
                title: '休闲娱乐 / 火车票',
                icon: 'el-icon-service left-icon',
                items: [{
                    title: '酒店星级',
                    items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                }]
            },{
                title: '生活服务',
                icon: 'el-icon-shopping-cart-2 left-icon',
                items: [{
                    title: '酒店星级',
                    items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                }]
            },{
                title: '丽人 / 美发 / 医学美容',
                icon: 'el-icon-s-check left-icon',
                items: [{
                    title: '酒店星级',
                    items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                }]
            },{
                title: '结婚 / 婚纱摄影 / 婚宴',
                icon: 'el-icon-present left-icon',
                items: [{
                    title: '酒店星级',
                    items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                }]
            },{
                title: '亲子 / 儿童乐园 / 幼教',
                icon: 'el-icon-burger left-icon',
                items: [{
                    title: '酒店星级',
                    items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                }]
            },{
                title: '运动健身 / 健身中心',
                icon: 'el-icon-basketball left-icon',
                items: [{
                    title: '酒店星级',
                    items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                }]
            },{
                title: '家装 / 建材 / 家居',
                icon: 'el-icon-box left-icon',
                items: [{
                    title: '酒店星级',
                    items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                }]
            },{
                title: '学习培训 / 音乐培训',
                icon: 'el-icon-notebook-1 left-icon',
                items: [{
                    title: '酒店星级',
                    items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                }]
            },{
                title: '医疗健康 / 宠物 / 爱车',
                icon: 'el-icon-truck left-icon',
                items: [{
                    title: '酒店星级',
                    items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                }]
            },{
                title: '酒吧 / 密室逃脱',
                icon: 'el-icon-place left-icon',
                items: [{
                    title: '酒店星级',
                    items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                }]
            }]
        }
    }
}
</script>

<style lang="less">
    .left-banner {
        position: relative;
        height: 420px;
        .all-list {
            position: absolute;
            margin-top: -50px;
            width: 230px;
            height: 475px;
            background-color: #fff;
            border: 1px solid rgb(216, 216, 216);
            z-index: 10;
            dt {
                margin: 20px 0px 20px 15px;
                font-weight: 700;
            }
            .all-list-item {
                height: 25px;
                color: #666;
                font-size: 13px;
                padding: 4px 5px;
                box-sizing: border-box;
                &:hover {
                    .per-list {
                        display: inline-block;
                    }
                    background: rgba(255,150,0,0.08);
                    .item-list {
                        font-weight: 700;
                        color: #222222;
                        cursor: pointer;
                    }
                }
                .left-icon {
                    float: left;
                    margin: 1px 5px 0 8px;
                    font-size: 16px;
                }
                .item-list {
                    height: 25px;
                    line-height: 17px;
                }
                .right-icon {
                    float: right;
                    font-size: 12px;
                    margin-top: 2px;
                }
                .per-list {                   
                    display: none;
                    position: absolute;
                    top: 59px;
                    left: 230px;
                    width: 400px;
                    height: 416px;
                    background-color: rgb(255, 255, 255);
                    padding: 20px;
                    box-sizing: border-box;
                    .per-list-item {
                        &::after {
                            display: block;
                            content: '';
                            clear: both;
                        }
                        .per-list-title {
                            display: flex;
                            justify-content: space-between;
                            padding: 10px 0;
                            border-bottom: 1px solid rgb(206, 206, 206);
                            .theme {
                                font-size: 16px;
                                color: #000;
                            }
                            
                        }
                        .per-list-content {
                            li {
                                margin: 5px;
                                float: left;
                                a {
                                    color: #666;
                                    &:hover {
                                        color: #FE8C00;
                                    }
                                }
                            }
                        }
                    }
                    
                }
            }
        }
    }
    
</style>