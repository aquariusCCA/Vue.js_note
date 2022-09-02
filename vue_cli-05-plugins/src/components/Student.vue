<template>
    <div>
        <h2 @click="showName">學生姓名: {{name}}</h2>    
        <h2>學生性別: {{sex}}</h2>    
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '蕭士麟',
                sex: '男'
            }
        }
    }
</script>