<template>
    <div class="main-header">
        <top-bar />
        <search-bar />
    </div>
</template>

<script>
import topBar from './topBar';
import searchBar from './searchBar'
export default {
    components: {
        topBar,
        searchBar
    }
}
</script>

<style lang="less">
    .main-header {
        font-size: 12px;
    }
</style>
