/* 
The process data takes the data obtained from the WebSocket and
saves it appropriately in the store. We also limit the total history 
to just the recent 10 updates for a particular ticker.
*/

function processData(newData, graphData) {
    let allData = [];
    if (graphData) {
        allData = graphData.map(gd => gd);
    }
    newData.forEach(item => {
        const pos = allData.findIndex(a => a.ticker === item.ticker);
        if (pos == -1) {
            allData.push({
                ticker: item.ticker,
                history: [{
                    price: Number(item.price),
                    lastUpdated: item.lastUpdated.format("h:mm:ss a")
                }]
            })
        } else {
            allData[pos].history.push({
                price: Number(item.price),
                lastUpdated: item.lastUpdated.format("h:mm:ss a")
            });
            const len = allData[pos].history.length;
            if (len > 10) {
                allData[pos].history = allData[pos].history.slice(len - 10);
            }
        }
    });
    return allData;
}

export default function (state={selectedTicker:null, graphData:null}, action) {
    switch (action.type) {
        case "TICKER_SELECTED":
            return {...state, selectedTicker: action.payload};
            break;

        case "SAVE_TO_GRAPH":
            return {...state, graphData: processData(action.payload, state.graphData)};
            break;
    }
    return state;
} 