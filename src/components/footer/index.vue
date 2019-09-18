<template>
    <div class="footer-bar">
        <footer-top />
        <footer-bottom />
    </div>
</template>

<script>
import footerTop from './footerTop';
import footerBottom from './footerBottom';
export default {
    components: {
        footerTop,
        footerBottom
    }
}
</script>

<style lang="less">
    .footer-bar {
        width: 1190px;
        margin: 0 auto;
    }
    @media screen and (max-width: 1190px){
        .footer-bar {
            width: 1050px;
        }
    }
</style>
