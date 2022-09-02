<template>
    <div>
        <h2 @click="showName">學校名稱: {{name}}</h2>    
        <h2>學生地址: {{address}}</h2>    
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '尚硅谷',
                address: '北京-昌平',
            }
        }
    }
</script>