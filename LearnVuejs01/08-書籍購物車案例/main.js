const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '算法導論',
                date: '2006-09',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: 'Unix 編程藝術',
                date: '2006-02',
                price: 59.00,
                count: 1
            },
            {
                id: 1,
                name: '編程珠璣',
                date: '2006-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '代碼大全',
                date: '2006-03',
                price: 128.00,
                count: 1
            }
        ]
    },
    methods: {
        getFinalPrice(price) {
            // toFixed(2): 表示保留兩位小數
            return '$' + price.toFixed(2)
        },
        decrement(index){
            this.books[index].count--
        },
        increment(index){
            this.books[index].count++
        },
        removeClick(index){
            // 從 index 索引處開始刪除 1 個元素
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice(){
            let totalPrice = 0
            for(let i = 0; i < this.books.length; i++){
                totalPrice += this.books[i].price * this.books[i].count            
            }
            return totalPrice
        }
    },
    filters: {
        showPrice(price) {
            // toFixed(2): 表示保留兩位小數
            return '$' + price.toFixed(2)
        }
    }
})