<template>
    <div>
        <!-- 
        :age="25"  -> 這樣才可以寫表達式。
        age="25" -> 這樣寫都會是字符串。 
        -->
        <Student name="蕭士麟" sex="男" :age="25"/><hr>
    </div>
</template>

<script>
    import Student from './components/Student.vue'

    export default {
        name: 'App',
        components: { // 註冊組件
            Student
        }
    }
</script>

<style>

</style>