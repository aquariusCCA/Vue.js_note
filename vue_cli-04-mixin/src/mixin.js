// 功能: 可以把多個組件共用的配置抽取成一個混入對象
// 使用方式:
//     第一步: 定義混和
//     第二步: 使用混和
//         (1). 全局混和: Vun.mixin(xxx)
//         (2). 局部混和: mixins: ['xxx']

export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() { // mountede: 表示組件掛載完成之後。
        console.log('你好啊!!')
    }
}


export const mixin2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
}
