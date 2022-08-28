const nums = [10, 20, 111, 222, 444, 40, 50]

//1. 需求: 取出所有小於 100 的數字
let newNums = []
for(let n of nums){
    if(n < 100){
        newNums.push(n)
    }
}

// 高階函數 filter
// filter 函數有一個要求，就是必須要反為布爾值
// true: 函數內部會自動將這次回調的 n 加入到新數組中
// false: 函數內部會過濾掉這次的 n
newNums = nums.filter(function(n){
    return n < 100
})


//2. 將所有小於 100 的數字進行轉化: 全部 * 2
let new2Nums = []
for(let n of nums){
    new2Nums.push(n * 2)
}

// 高階函數 map 
new2Nums = new2Nums.map(function(n){
    return n * 2
})


//3. 需求: 將所有 new2Nums 數字相加，得到最終的結果
let total = 0
for(let n of new2Nums){
    total += n
}

// 高階函數 reduce
// reduce(): 對數組中的所有內容進行匯總
// 參數 1: 必須是一個函數，preValue 表示參數 2 現在的值、n 表示數組中的元素
// 參數 2: 表示初始值
// 第一次: preValue = 0、n = 20
// 第二次: preValue = 20、n = 40
// 第三次: preValue = 60、n = 80
// 第四次: preValue = 140、n = 100
new2Nums = [20, 40, 80, 100]
new2Nums.reduce(function(preValue, n){
    return preValue + n
}, 0)
