import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise";

import GraphReducer from "./reducers/GraphReducer";
import TableReducer from "./reducers/TableReducer";

/* 
We create a store with 2 types of data to be stored: 
graph: Object which stores the data required to render the live graph.
    -> selectedTicker: string which stores the ticker name of whose
        data is to be displayed.
    -> graphData: Array of Object storing the data history of each ticker.
        -> ticker: string storing name of the ticker.
        -> history: Array of Object storing the history of the ticker
            -> price: number which stores the price of the stock 
            -> lastUpdated: Moment Object which stores the timestamp
                at which the price was updated.

data: Array of Objects which store data required to render the table
    -> ticker: string which stores the name of the ticker
    -> price: number which stores the current price of the stock
    -> change: number which stores the difference between previous and 
        current stock price.
    -> lastUpdated: Moment Object which stores the timestamp at which the 
        price was updated.
*/

const store = createStore(
    combineReducers({
        graph: GraphReducer,
        data: TableReducer
    }),
    applyMiddleware(thunk, promise, logger)
);

export default store;
