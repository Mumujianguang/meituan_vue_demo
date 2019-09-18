<template>
    <div class="right-banner">
        <ul class="main-nav-list">
            <li class="nav-title">
                <router-link to="/">美团外卖</router-link>
            </li>
            <li class="nav-title">
                <router-link to="/">猫眼电影</router-link>
            </li>
            <li class="nav-title">
                <router-link to="/">美团酒店</router-link>
            </li>
            <li class="nav-title">
                <router-link to="/">民宿/公寓</router-link>
            </li>
            <li class="nav-title">
                <router-link to="/">商家入驻</router-link>
            </li>
            <li class="nav-title">
                <router-link to="/">美团公益</router-link>
            </li>
        </ul>
        <div class="main-nav-box">
            <div class="carousel-box">
                <el-carousel height="240px" class="carousel">
                    <el-carousel-item v-for="(item, index) in imgList" :key="index">
                        <img :src="item" alt="" class="car-img">
                    </el-carousel-item>
                </el-carousel>
                <div class="carousel-box-bottom-module">
                    <div class="carousel-box-bottom">
                        <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt="">
                    </div>
                    <div class="carousel-box-bottom">
                        <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt="">
                    </div>
                </div>
                
            </div>
            <div class="ad-box">
                <img class="ad-top" src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="">
                <img class="ad-bottom" src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="">
            </div>
            <div class="user-module">
                <div class="user-box">
                    <div class="user-avatar">
                        <img src="@/assets/images/avatar.jpg" alt="">
                    </div>
                    <p>Hi！你好</p>
                    <div>
                        <button class="btn login-btn">注册</button>
                    </div>
                    <div>
                        <button class="btn register-btn">立即登录</button>
                    </div>
                </div>
                <div class="app-code">
                    <div class="app-code-img">
                        <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
                    </div>
                    <p class="app-code-title">美团APP手机版</p>
                    <p class="app-code-info">
                        <span class="low-price">1元起</span>
                        <span>吃喝玩乐</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            imgList: [
                'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
                'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
                'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png',
                'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
                'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
            ]
        }
    }
}
</script>

<style lang="less">
    .right-banner {
        position: absolute;
        top: 0px;
        left: 232px;
        padding: 10px;
        width: 950px;
        height: 410px;
        .main-nav-list {
            position: absolute;
            margin-top: -60px;
            font-size: 16px;
            font-weight: 700;
            padding: 13px 10px;
            width: 640px;
            box-sizing: border-box;
            .nav-title {
                float: left;
                margin-left: 35px;
                a {
                    color: #000;
                    &:hover {
                        color:#fbc700;
                    }
                }
            }
        }
        .main-nav-box {
            display: flex;
            .carousel-box {
                width: 550px;
                height: 408px;
                .carousel {                    
                    height: 240px;
                    .car-img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .carousel-box-bottom-module {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    height: 165px;
                    margin-top: 10px;
                    .carousel-box-bottom {
                        width: 270px;
                        height: 165px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                
            }
            .ad-box {
                width: 150px;
                height: 408px;
                margin-left: 10px;
                .ad-top {
                    width: 100%;
                    height: 240px;
                }
                .ad-bottom {
                    width: 100%;
                    height: 165px;
                    margin-top: 6px;
                }
            }
            .user-module {
                width: 230px;
                height: 410px;
                margin-left: 10px;
                .user-box {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    width: 100%;
                    height: 240px;    
                    padding: 30px;
                    box-sizing: border-box;
                    border: 1px solid rgb(228, 228, 228);
                    background-color: rgb(255, 255, 255);
                    .user-avatar {
                        width: 55px;
                        height: 55px;   
                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                            box-shadow: 0px 0px 5px 3px rgb(212, 212, 212);
                        }
                    }
                    .btn {
                        width: 120px;
                        height: 37px;
                        border: 1px solid rgb(209, 209, 209);
                        border-radius: 15px;
                        outline: none;
                        background-color: #fff;
                        margin-top: 10px;
                        &:hover {
                            background-color: rgb(228, 228, 228);  
                            transition: background-color .5s linear; 
                        }
                    }
                }
                .app-code {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    width: 100%;
                    height: 165px;
                    margin-top: 10px;
                    border: 1px solid rgb(228, 228, 228);
                    padding-bottom: 15px;
                    box-sizing: border-box;
                    background-color: rgb(255, 255, 255);
                    .app-code-img {
                        width: 95px;
                        height: 95px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .app-code-info {
                        font-size: 12px;
                        color: rgb(82, 82, 82);
                        .low-price {
                            color: #EC5330;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1190px){
        .right-banner {
            width: 710px;
            .main-nav-box .carousel-box {
                width: 470px;
                .carousel-box-bottom-module {
                    .carousel-box-bottom {
                        width: 230px;
                    }
                }
            }
            .ad-box {
                display: none;
            }
        }
    }
</style>
