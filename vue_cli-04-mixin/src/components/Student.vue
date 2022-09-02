<template>
    <div>
        <h2 @click="showName">學生姓名: {{name}}</h2>    
        <h2>學生性別: {{sex}}</h2>    
    </div>
</template>

<script>
    // 引入混合
    import {mixin} from '../mixin'

    export default {
        name: 'Student',
        data() {
            return {
                name: '蕭士麟',
                sex: '男'
            }
        },
        // 局部混和
        mixins: [mixin]
    }
</script>