/* 
Here, we process the data to be rendered on the table. We then save 
it on the store.
*/

function processData(newData, state) {
    let allData = [];
    if (state) {
        allData = state.map(s => s);
    }
    newData.forEach(item => {
        const pos = allData.findIndex(a => a.ticker === item.ticker);
        if (pos == -1){
            allData.push({
                ticker: item.ticker,
                price: item.price,
                change: 0,
                lastUpdated: item.lastUpdated
            })
        } else {
            const diff = item.price - allData[pos].price;
            allData[pos].price = item.price;
            allData[pos].change = diff.toFixed(2);
            allData[pos].lastUpdated = item.lastUpdated;
        }
    });
    return allData;
}


export default function (state=null, action) {
    switch (action.type) {
        case "SAVE_TO_TABLE":
            return processData(action.payload, state);
            break;
    }
    return state;
}