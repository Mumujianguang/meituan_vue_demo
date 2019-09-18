<template>
    <div class="hot-city-box">
        <p class="hot-city-title">{{ type }}</p>
        <ul class="hot-city-body">
            <li class="hot-city-item" 
                v-for="(item, index) in hotCityList" 
                :key="index">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['type', 'hotCityList']
}
</script>

<style lang="less">
    .hot-city-box {
        height: 40px;
        line-height: 40px;
        padding: 30px 0;
        .hot-city-title {
            float: left;
        }
        .hot-city-body {
            display: flex;
            float: left;
            .hot-city-item {
                margin-left: 25px;
                color: #666;
                font-size: 14px;
                &:hover {
                    color: #222;
                    cursor: pointer;
                }
            }
        }
    }
</style>