<template>
    <div>
        <h2 @click="showName">學校名稱: {{name}}</h2>    
        <h2>學生地址: {{address}}</h2>    
    </div>
</template>

<script>
    // 引入一個混和
    import {mixin, mixin2} from '../mixin'

    export default {
        name: 'Student',
        data() {
            return {
                name: '尚硅谷',
                address: '北京-昌平',
                x: 666 // 混和配置項有 x，組件也有 x；此時以組件中的 x 為主。
            }
        },
        // 局部混和
        mixins: [mixin, mixin2]
    }
</script>