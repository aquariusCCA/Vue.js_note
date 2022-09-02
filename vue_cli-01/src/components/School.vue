<template>
    <div class="demo">
        <h2>學校名稱: {{name}}</h2>
        <h2>學校地址: {{address}}</h2>
        <button @click="showName">點我顯示學校名稱</button>
    </div>
</template>


<script>
    export default {
        name: 'School',
        data(){
            return {
                name: '尚硅谷',
                address: '北京昌平' 
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        }
    }
</script>


<style>
    .demo{
        background-color: orange;
    }
</style>