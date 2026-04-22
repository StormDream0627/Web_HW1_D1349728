// 定義一個非同步函數
async function fetchData() {
    let result = fetch("https://gogochi.github.io/fetching-data/products.json");
    console.log("fetching data...")
    
    const response = await result;
    console.log("收到回應 "+response.status);

    json = await response.json();
    console.log(json[0].name);
}
// 調用非同步函式
fetchData();
console.log("立刻執行");