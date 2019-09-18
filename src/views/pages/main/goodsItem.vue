<template>
    <div :class="{typeOne: goods.type === 1, typeTwo: goods.type === 2}">
        <dl class="goods-title-module">
            <dt class="goods-title">{{ goods.title }}</dt>
            <dd class="goods-group"
                @mouseenter="enterGroup(item)"
                v-for="(item, index) in goods.list" 
                :key="item + index">
                {{ item.title }}
            </dd>
        </dl>
        <ul class="item-info-list" >
            <li class="per-item" v-for="(value, key) in curGroupData" :key="value + key">
                <img :src="value.img" alt="">
                <p class="per-item-name">{{ value.name }}</p>
                <p class="per-item-describe">{{ value.describe }}</p>
                <div class="per-item-bottom">
                    <div>
                        <span class="per-item-price-icon">￥</span>
                        <span class="per-item-price">{{ value.price }}</span>
                        <span class="per-item-price-icon">/人均</span>
                    </div>
                    <div>
                        <span class="per-item-location">{{ value.location }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['goods'],
    data () {
        return {
            curGroupData: this.goods.list[0].info
        }
    },
    methods: {
        enterGroup (data) {
            this.curGroupData = data.info
        }
    }
    
}
</script>

<style lang="less">
    .mix-style () {
        margin-top: 50px;
        
        background-color: rgb(255, 255, 255);
    }
    .typeOne {
        .mix-style();
        .goods-title-module {
            display: flex;
            background-color: rgb(190, 164, 116);
            color: #fff;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            width: 100%;
            height: 44px;
            line-height: 44px;
            .goods-title {
                font-size: 18px;
                margin: 0 15px;
            }
            .goods-group {
                font-size: 14px;
                margin: 0 10px;
                &:hover {
                    cursor: pointer;
                }
            }
        }
        .item-info-list {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 10px;
            .per-item {
                position: relative;
                display: flex;
                flex-direction: column;
                width: 31%;
                height: 270px;
                box-sizing: border-box;
                padding: 5px 10px;
                img {
                    width: 100%;
                    height: 162px;
                    border-radius: 10px;
                }
                .per-item-name {
                    margin: 8px 0;
                    color: #222;
                }
                .per-item-describe {
                    font-size: 12px;
                    color: #999;
                }
                .per-item-bottom {
                    display: flex;
                    justify-content: space-between;
                    height: 27px;
                    line-height: 27px;
                    margin-top: 10px;
                    .per-item-price-icon {
                        color: #BE9E4D;
                        font-size: 12px;
                    }
                    .per-item-price {
                        font-size: 22px;
                        color: #BE9E4D;
                    }
                    .per-item-location {
                        font-size: 12px;
                        color: #666;
                    }
                }
            }
        }
    }
    .typeTwo {
        background-color: rgb(231, 154, 66);
    }
</style>