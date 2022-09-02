<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">點我輸出上方的 DOM 元素</button>
        <School ref="sch"></School>
    </div>
</template>

<script>
    import School from './components/School.vue'

    export default {
        name: 'App',
        data(){
            return {
                msg: '歡迎學習 Vue'
            }
        },
        components: { // 註冊組件
            School
        },
        methods: {
            // ref 屬性:
            //     1. 被用來給元素或子組件註冊引用信息(id的替代者)
            //     2. 應用在 html 標籤上獲取的是真實 DOM 元素，應用在組件標籤上是組件實例對象
            //     3. 使用方式
            //         打標識: <h1 ref="xxx">....</h1>
            //         獲取: this.$refs.xxx
            showDOM(){
                console.log(this.$refs)
                console.log(this.$refs.title) // 真實 DOM 元素。 
                console.log(this.$refs.btn) // 真實 DOM 元素。
                console.log(this.$refs.sch) // School 組件對象。
            }
        }
    }
</script>

<style>

</style>