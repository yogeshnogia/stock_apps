import React, { lazy, Suspense } from "react";

// const StockTable = lazy(() => import("../containers/StockTable"));
// const StockGraph = lazy(() => import("../containers/StockGraph"));

import StockTable from "../containers/StockTable";
import StockGraph from "../containers/StockGraph";

import styles from "../../assets/css/app.css";
import github from "../../assets/img/github.png";

/* 
A simple skeleton to render the various components of the app.
The layout is achieved through CSS Grids which can be modified 
to apply a particular layout for a particular screen size.
*/

const App = () => (
    <div className={styles.appContainer}>
        <div className={styles.bg}></div>
        <div className={styles.titleContainer}>
            Stocks. <b>Live.</b>
            <div className={styles.githubContainer}>
            </div>
        </div>
        <div className={styles.stocksContainer}>
            <div className={styles.tableContainer}>
            {/* <Suspense fallback={null}> */}
                <StockTable />
            {/* </Suspense> */}
            </div>
            <div className={styles.graphContainer}>
                {/* <Suspense fallback={null}> */}
                    <StockGraph />
                {/* </Suspense> */}
            </div>
        </div>
    </div>
)

export default App;
