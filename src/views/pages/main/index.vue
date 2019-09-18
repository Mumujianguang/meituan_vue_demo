<template>
    <div class="main-page">
        <div class="banner">
            <left-banner />
            <right-banner />
        </div>
        <div class="hot-goods-list">
            <hot-goods />
        </div>
    </div>
</template>

<script>
import leftBanner from './leftBanner';
import rightBanner from './rightBanner';
import hotGoods from './hotGoods'
export default {
    components: {
        leftBanner,
        rightBanner,
        hotGoods
    }
}
</script>

<style lang="less">
    .main-page {
        position: relative;
        width: 1190px;
        margin: 0 auto 50px;
    }
    @media screen and (max-width: 1190px) {
        .main-page {
            width: 950px;
        }
    }
</style>
