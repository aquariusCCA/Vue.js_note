<!-- 
遇到 :  Error: Cannot find module ‘vue-template-compiler
解決-原文網址:　https://blog.csdn.net/weixin_45324044/article/details/111171220 
-->
<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>學生姓名: {{name}}</h2>
        <h2>學生性別: {{sex}}</h2>
        <h2>學生年齡: {{myAge + 1}}</h2>
        <button @click="updateAge">嘗試修改收到的年齡</button>
    </div>
</template>


<script>
    export default {
        // name: 'Student'  ->  組件名稱
        name: 'Student',
        data(){
            return {
                msg: '我是一個尚硅谷的學生',
                // this.age: 是來自於 props 配置項裡的，因為 props 的優先級比 data() 高
                myAge: this.age
            }
        },
        methods: {
            updateAge() {
                console.log('updateAge')
                console.log(this.myAge)
                this.myAge++
            }
        },
        // 簡單接收
        props: ['name', 'sex', 'age']


        // 接收的同時對數據進行類型轉換
        // props: {
        //     name: String,
        //     age: Number,
        //     sex: String
        // }


        // 接收的同時對數據，進行類型轉換 + 默認值的指定 + 必要性的限制。
        // props: {
        //     name: { 
        //         type: String, // 限制 name 的類型是字符串。
        //         required: true // name 是必要的。
        //     },
        //     age: {
        //         type: Number,
        //         default: 99 // 給予默認值
        //     },
        //     sex: {
        //         type: String,
        //         required: true
        //     }
        // }
    }
</script>