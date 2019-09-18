<template>
    <ul class="nav-bar">
        <li class="item">
            <router-link class="title" to="/">我的美团</router-link>
            <dl>
                <dd><a href="#">我的订单</a></dd>
                <dd><a href="#">我的收藏</a></dd>
                <dd><a href="#">抵用券</a></dd>
                <dd><a href="#">账户设置</a></dd>
            </dl>
        </li>
        <li class="item">
            <router-link class="title" to="/">手机APP</router-link>
        </li>
        <li class="item">
            <router-link class="title" to="/">商家中心</router-link>
            <dl class="business-center-list">
                <dd><a href="#">登录商家中心</a></dd>
                <dd><a href="#">美团智能收银</a></dd>
                <dd><a href="#">我想合作</a></dd>
                <dd><a href="#">手机免费开店</a></dd>
                <dd><a href="#">餐饮代理商招募</a></dd>
                <dd><a href="#">商家申请开票</a></dd>
                <dd><a href="#">免费合作美团排队</a></dd>
            </dl>
        </li>
        <li class="item">
            <router-link class="title" to="/">美团规则</router-link>
            <dl>
                <dd><a href="#">规则中心</a></dd>
                <dd><a href="#">规则目录</a></dd>
                <dd><a href="#">规则评议院</a></dd>
            </dl>
        </li>
        <li class="item">
            <router-link class="title" to="/">网站导航</router-link>
            <dl class="site-nav">
                <div class="hotel-list">
                    <p>酒店旅游</p>
                    <ul>
                        <li><a href="#">国际机票</a></li>
                        <li><a href="#">火车票</a></li>
                        <li><a href="#">榛果民宿</a></li>
                        <li><a href="#">经济型酒店</a></li>
                        <li><a href="#">主题酒店</a></li>
                        <li><a href="#">商务酒店</a></li>
                        <li><a href="#">公寓</a></li>
                        <li><a href="#">豪华酒店</a></li>
                        <li><a href="#">客栈</a></li>
                        <li><a href="#">青年旅社</a></li>
                        <li><a href="#">度假酒店</a></li>
                        <li><a href="#">别墅</a></li>
                        <li><a href="#">农家院</a></li>
                    </ul>
                </div>
                <div class="food-list">
                    <p>吃美食</p>
                    <ul>
                        <li><a href="#">烤鱼</a></li>
                        <li><a href="#">特色小吃</a></li>
                        <li><a href="#">烧烤</a></li>
                        <li><a href="#">自助餐</a></li>
                        <li><a href="#">火锅</a></li>
                        <li><a href="#">代金券</a></li>
                    </ul>
                </div>
                <div class="">
                    <p>看电影</p>
                    <ul>
                        <li><a href="#">热映电影</a></li>
                        <li><a href="#">热门影院</a></li>
                        <li><a href="#">热映电影口碑榜</a></li>
                        <li><a href="#">最受期待电影</a></li>
                        <li><a href="#">国内票房榜</a></li>
                        <li><a href="#">北美票房榜</a></li>
                        <li><a href="#">电影排行榜</a></li>
                    </ul>
                </div>
                <div class="app-list">
                    <p>手机应用</p>
                    <ul>
                        <li><img src="@/assets/images/01.png" title="美团app" alt="美团app"></li>
                        <li><img src="@/assets/images/02.png" title="外卖app" alt="外卖app"></li>
                        <li><img src="@/assets/images/03.png" title="棒果app" alt="棒果app"></li>
                        <li><img src="@/assets/images/04.png" title="点评app" alt="点评app"></li>
                        <li><img src="@/assets/images/05.png" title="猫眼app" alt="猫眼app"></li>
                    </ul>
                </div>
            </dl>
        </li>
    </ul>
</template>

<style lang="less">
    .nav-bar {
        display: flex;
        justify-content: space-around;
        list-style: none;
        .item {
            position: relative;
            width: 76px;
            box-sizing: border-box;
            &:hover {
                background-color: #fff;
                box-shadow: 0px 0px 1px 0px rgb(184, 184, 184);
                dl {
                    display: block;
                }
                .site-nav {
                    display: flex;
                }
            }
            .title {
                padding: 0 14px;
                color: #999;
                &:hover {
                    cursor: pointer;
                    color: #FE8C00;
                }
            }
            dl {
                position: absolute;
                right: -1px;
                display: none;
                width: 76px;
                line-height: 35px;
                text-align: center;
                background-color: rgb(255, 255, 255);
                border: 1px solid #E5E5E5;
                box-shadow: 0px 0px 8px 0px rgba(83, 83, 83, 0.1);
                box-sizing: content-box;
                border-top: none;
                z-index: 1000;
                dd {
                    a {
                        color: #999;
                        &:hover {
                            cursor: pointer;
                            color: #FE8C00;
                        }
                    }
                    
                }
            }
            .business-center-list {
                width: 100px;
            }
            .site-nav {
                display: none;
                justify-content: space-around;
                width: 1190px;
                padding: 30px 20px;
                box-sizing: border-box;
                ul {
                    margin-top: 15px;
                    li {
                        line-height: 25px;
                        a {
                            color: #999;
                            &:hover {
                                cursor: pointer;
                                color: #FE8C00;
                                box-shadow: none;
                            }
                        } 
                    }
                }       
                p {
                    color: #000;
                    font-size: 16px;
                }
                .hotel-list {
                    width: 240px;
                    li {
                        width: 33%;
                        float: left;
                    }
                }
                .food-list {
                    width: 150px;
                    li {
                        width: 50%;
                        float: left;
                    }
                }
                .app-list {
                    width: 350px;
                    ul {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        li {
                            width: 60px;
                            float: left;
                            margin: 0 5px;
                            img {
                                width: 60px;
                                height: 60px;
                            }
                        }
                    }
                    
                }
            }
            @media screen and (max-width: 1190px){
                .site-nav {
                    width: 960px;
                    .app-list {
                        width: 250px;
                    }
                }
            }
        }
    }
</style>
