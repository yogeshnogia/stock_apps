import moment from "moment";

export const saveTableData = (data) => {
    return {
        type: "SAVE_TO_TABLE",
        payload: data
    }
}

export const saveGraphData = (data) => {
    return {
        type: "SAVE_TO_GRAPH",
        payload: data
    }
}

export const selectTicker = (ticker) => {
    return {
        type: "TICKER_SELECTED",
        payload: ticker
    }
}

function parseData(newData) {
    const date = moment();
    return newData.map(d => {
        return {
            ticker: d[0].toUpperCase(),
            price: d[1].toFixed(2),
            lastUpdated: date
        }
    });
}

export function getStocks() {
    return dispatch => {
        const socket = new WebSocket("ws://stocks.mnet.website");
        socket.onmessage = (event) => {
            const data = parseData(JSON.parse(event.data));
            dispatch(saveTableData(data));
            dispatch(saveGraphData(data));
        }

        socket.onerror = (event) => {
            console.log("haha", event);
        }
    }
}