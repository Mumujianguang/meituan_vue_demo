<template>
    <div class="location-bar">
        <div>
            <i class="el-icon-location"></i>
            <span class="city">{{ curCity ? curCity.name : '' }}</span>
        </div>
        <div>
            <router-link to="/city" class="change-city">切换城市</router-link> 
            <div class="child-city">
                <i>[</i>
                <span v-for="(item, index) in (curCity ? curCity.nearCity : [])"
                      :key="index">{{ item ? item.name : '' }}</span>
                <i>]</i>
            </div>
        </div>
        <div class="user-login">
            <router-link class="login" to="login">立即登录</router-link>
            <router-link class="register" to="register">注册</router-link>
        </div>
    </div>
</template>

<script>
import { getData } from '@/api.js'
import { mapState, mapMutations } from 'vuex'
export default {
    data () {
        return {
            
        }
    },
    computed: {
        ...mapState(['curCity'])
    },
    created () {
        getData('/api/meituan/city/getPosition.json')
            .then(res => {
                console.log(res);
                this.setCurCity(res.data.data);
            })
    },
    methods: {
        getData,
        ...mapMutations(['setCurCity'])
    }
}
</script>

<style lang="less">
    .location-bar{
        .mix-hover() {
            &:hover {
                color: #FE8C00;
            }
        }
        .el-icon-location {
            font-size: 14px;
        }
        div {
            cursor: pointer;
            display: inline-block;
            margin-right: 5px;
            a {
                color: #999;
            }
        }
        .city {
            color: #666;
        }
        .change-city {
            color: #666;
            background: #F4F4F4;
            border: 1px solid #E5E5E5;
            padding: 0 2px;
            .mix-hover();
        }
        .login {
            color: #FE8C00;
        }
        .child-city {
            span {
                margin: 0 2px;
                .mix-hover();
            }
        }
        .user-login {
            a {
                margin: 0 5px;
                .mix-hover();
            }
        }
    }    
</style>
