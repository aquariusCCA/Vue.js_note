<template>
    <!-- div 標籤中的 class="school" -> 指定樣式名稱 -->
    <div class="school">
        <h2>學校名稱: {{name}}</h2>
        <h2>學校地址: {{address}}</h2>
    </div>
</template>


<script>
    export default {
        // name: 'School'  ->  組件名稱
        name: 'School',
        data(){
            return {
                name: '尚硅谷',
                address: '北京-昌平'
            }
        }
    }
</script>

<style>
    .school {
        background-color: orange;
    }
</style> 