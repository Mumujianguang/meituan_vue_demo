<template>
    <div class="hot-goods">
        <template v-for="(item, index) in hotGoodsList">
            <goods-item :goods="item" :key="item + index" />
        </template>
    </div>
</template>

<script>
import goodsItem from './goodsItem'
export default {
    data () {
        return {
            hotGoodsList: [{
                title: '有格调',
                type: 1,
                list: [{
                    title: '全部',
                    info: [{
                        name: '储缘蛋糕（双华店）',
                        img: 'http://p0.meituan.net/bbia/4476c225f6e072204042288f83e512c353303.jpg@460w_260h_1e_1c',
                        describe: '6英寸欧式水果蛋糕',
                        price: '39',
                        location: '新华公园'
                    },{
                        name: '藤野造型（天府广场店）',
                        img: 'http://p0.meituan.net/merchantpic/0be5f931622c93a399c51fd38c8f31cb387384.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C460w_260h_1e_1c',
                        describe: '藤野造型（天府广场店）',
                        price: '176',
                        location: '天府广场/盐市口'
                    },{
                        name: '岷山饭店芝芝自助餐厅',
                        img: 'http://p1.meituan.net/msmerchant/115b15297a96b577c1a1c66a9777e9d2380120.jpg@460w_260h_1e_1c',
                        describe: '【周一特惠】自助双人午餐',
                        price: '238',
                        location: '小南街/天府广场'
                    },{
                        name: '米娜造型（天府广场店）',
                        img: 'http://p1.meituan.net/merchantpic/19d7ad2f8e4753a50442226610af0074506930.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C460w_260h_1e_1c',
                        describe: '米娜造型（天府广场店）',
                        price: '52',
                        location: '天府广场/盐市口'
                    },{
                        name: 'JGO（盐市口茂业店）',
                        img: 'http://p1.meituan.net/wedding/f165cca58bbbfab0fa9181642d6e75d8196767.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C460w_260h_1e_1c',
                        describe: 'JGO（盐市口茂业店）',
                        price: '93',
                        location: 'IFS/香槟广场'
                    },{
                        name: '一佳造型（财富中心店）',
                        img: 'http://p0.meituan.net/wedding/18437fe256559724c43ff65ddad25d291112706.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C460w_260h_1e_1c',
                        describe: '一佳造型（财富中心店）',
                        price: '170',
                        location: '大业路'
                    }]
                },{
                    title: '约会聚餐',
                    info: [{
                        name: '德香苑北京烤鸭（奥克斯广场店）',
                        img: 'http://p1.meituan.net/msmerchant/74739119ea4867c9f1aea13dbcaa1339160451.jpg@460w_260h_1e_1c',
                        describe: '2人套餐，提供免费WiFi',
                        price: '118',
                        location: '环球中心'
                    },{
                        name: '必胜客（天府凯德店）',
                        img: 'http://p0.meituan.net/msmerchant/36e41318a02a201e4958652c6a05cebb1942017.jpg@460w_260h_1e_1c',
                        describe: '【人气】超值丰盛2人餐 （A013）1份',
                        price: '159',
                        location: '火车南站'
                    },{
                        name: '香荟全天候餐厅',
                        img: 'http://p1.meituan.net/msmerchant/b290f0899ed707e3238c38a4d7a56a52869264.jpg@460w_260h_1e_1c',
                        describe: '单人超值自助午餐',
                        price: '228',
                        location: '天府广场/盐市口'
                    },{
                        name: '豪客来牛排（人民公园店-1608）',
                        img: 'http://p0.meituan.net/msmerchant/ad9fd2c66a60910200e93b73bc91630034551.jpg@460w_260h_1e_1c',
                        describe: '悠享2人餐，提供免费WiFi',
                        price: '134',
                        location: '人民公园/宽窄巷子'
                    },{
                        name: '胖老汉清真餐饮',
                        img: 'http://p1.meituan.net/msmerchant/9703b0b01fd265a8bf3bf7bbcbfc3b5a47239.jpg@460w_260h_1e_1c',
                        describe: '胖老汉6-8人餐',
                        price: '380',
                        location: '小南街/天府广场'
                    },{
                        name: '瑞城海鲜自助餐厅',
                        img: 'http://p1.meituan.net/msmerchant/d7307beed106b65d72d0593854a970561408391.png@460w_260h_1e_1c',
                        describe: '骡马市/文殊院',
                        price: '170',
                        location: '大业路'
                    }]
                },{
                    title: '丽人SPA',
                    info: [{
                        name: '英国TONI&GUY（仁恒置地广场店）',
                        img: 'http://p0.meituan.net/wedding/c06fa94ceca79f1b98672a54b6e0d6ba537141.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C460w_260h_1e_1c',
                        describe: '英国TONI&GUY（仁恒置地广场店）',
                        price: '623',
                        location: '仁恒置地'
                    },{
                        name: '藤野造型（天府广场店）',
                        img: 'http://p0.meituan.net/merchantpic/0be5f931622c93a399c51fd38c8f31cb387384.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C460w_260h_1e_1c',
                        describe: '藤野造型（天府广场店）',
                        price: '176',
                        location: '天府广场/盐市口'
                    },{
                        name: '沐煕.salon（万科店）',
                        img: 'http://p0.meituan.net/merchantpic/ef2ee10dd42fb53b4c3a0c7543bb15bc82663.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C460w_260h_1e_1c',
                        describe: '沐煕.salon（万科店）',
                        price: '39',
                        location: '华阳'
                    },{
                        name: '米娜造型（天府广场店）',
                        img: 'http://p1.meituan.net/merchantpic/19d7ad2f8e4753a50442226610af0074506930.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C460w_260h_1e_1c',
                        describe: '米娜造型（天府广场店）',
                        price: '52',
                        location: '天府广场/盐市口'
                    },{
                        name: 'JGO（盐市口茂业店）',
                        img: 'http://p1.meituan.net/wedding/f165cca58bbbfab0fa9181642d6e75d8196767.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C460w_260h_1e_1c',
                        describe: 'JGO（盐市口茂业店）',
                        price: '93',
                        location: 'IFS/香槟广场'
                    },{
                        name: '一佳造型（财富中心店）',
                        img: 'http://p0.meituan.net/wedding/18437fe256559724c43ff65ddad25d291112706.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C460w_260h_1e_1c',
                        describe: '一佳造型（财富中心店）',
                        price: '170',
                        location: '大业路'
                    }]
                },{
                    title: '电影演出',
                    info: [{
                        name: '金逸IMAX影城（鹏瑞利店）',
                        img: 'http://p1.meituan.net/deal/__46251882__5561449.jpg@460w_260h_1e_1c',
                        describe: '免押金,可停车,儿童票,IMAX厅,60帧厅',
                        price: '19.9',
                        location: '新华公园'
                    },{
                        name: 'C+影城终极银幕（双铁广场店）',
                        img: 'http://p1.meituan.net/poi/35ba6a952e40c88eb409f1c8ff355bf8198609.jpg@460w_260h_1e_1c',
                        describe: '免押金,可停车,有情侣座,儿童票,有WIFI,4D厅,4DX厅',
                        price: '15',
                        location: '天府广场/盐市口'
                    },{
                        name: '百丽宫影城（太古里店）',
                        img: 'http://p1.meituan.net/deal/e53636a791e08a560c5f4afcad1443f1253454.jpg@460w_260h_1e_1c',
                        describe: '免押金,可停车,有情侣座,儿童票',
                        price: '40.9',
                        location: '华阳'
                    },{
                        name: '339影城',
                        img: 'http://p1.meituan.net/deal/__29934810__9298853.jpg@460w_260h_1e_1c',
                        describe: '免押金,可停车,有情侣座,儿童票,有WIFI,巨幕厅',
                        price: '19.9',
                        location: '天府广场/盐市口'
                    },{
                        name: '博纳国际影城（成都盐市口店）',
                        img: 'http://p1.meituan.net/deal/201208/22/1_0822151022.jpg@460w_260h_1e_1c',
                        describe: '免押金,有情侣座,儿童票,有WIFI,巨幕厅',
                        price: '27.9',
                        location: 'IFS/香槟广场'
                    },{
                        name: '百丽宫影城（恒大广场店）',
                        img: 'http://p0.meituan.net/deal/b5d58645020c9f08a2640805fecce27d263150.jpg@460w_260h_1e_1c',
                        describe: '免押金,可停车,儿童票,有WIFI,60帧厅,RealD 6FL厅',
                        price: '26.9',
                        location: '大业路'
                    }]
                },{
                    title: '品质出游',
                    info: [{
                        name: '博雅图国际公寓',
                        img: 'http://p1.meituan.net/tdchotel/735cc8eed611e6dc21a82408f0ee5c3f2596520.jpg@460w_260h_1e_1c',
                        describe: '6英寸欧式水果蛋糕',
                        price: '308',
                        location: '新华公园'
                    },{
                        name: '宜尚酒店',
                        img: 'http://p0.meituan.net/tdchotel/5363e5389afe2596fb6e1ee8949b4283362625.jpg@460w_260h_1e_1c',
                        describe: '新客超值优惠',
                        price: '393',
                        location: '天府广场/盐市口'
                    },{
                        name: '成都索菲斯民族大酒店',
                        img: 'http://p1.meituan.net/tdchotel/e1859b26ed1aa75fd2c48e2c7d822d56272050.jpg@460w_260h_1e_1c',
                        describe: '新客超值优惠',
                        price: '528',
                        location: '华阳'
                    },{
                        name: '西姆漫居酒店',
                        img: 'http://p0.meituan.net/dnaimgdark/0d30ea55ea4c55696a02c3f578eb22732392109.jpg@460w_260h_1e_1c',
                        describe: '新客超值优惠',
                        price: '248',
                        location: '天府广场/盐市口'
                    },{
                        name: '成都珠峰大酒店',
                        img: 'http://p0.meituan.net/tdchotel/27bd132098ea049dddc69af0fff8fe7481164.jpg@460w_260h_1e_1c',
                        describe: '房间内消费品',
                        price: '359',
                        location: 'IFS/香槟广场'
                    },{
                        name: '成都总府皇冠假日酒店',
                        img: 'http://p1.meituan.net/tdchotel/f9633bc44eb6a5231cdce76d9cf4388f91850.jpg@460w_260h_1e_1c',
                        describe: '新客超值优惠',
                        price: '1103',
                        location: '大业路'
                    }]
                }]
            }]
        }
    },
    components: {
        goodsItem
    }
}
</script>

<style lang="less">

</style>
