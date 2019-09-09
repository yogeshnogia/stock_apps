import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";

import styles from "../../assets/css/stocks.css";

// const Graph = lazy(() => import ("../components/Graph"));
import Graph from "../components/Graph";

/* 
We render the live graph in this container using the 'graph' state 
in the store. Initially the value of the selectedTicker is 'null' which
makes it display a temporary placeholder. As soon as its value gets updated 
we render the graph with the history data of that ticker.

We also use lazy loading to load the graph after a user clinks on the ticker 
which in turn decreases our entry bundle size and increases performance.
*/
class StockGraph extends Component {

    renderGraph() {
        if (!this.props.ticker) {
            return (
                <p>Please click on a Ticker to display graph.</p>
            );
        }
        const selectedGraph = this.props.graph.find(g => g.ticker === this.props.ticker)
        return (
            // <Suspense fallback={<p>Loading...</p>}>
                <Graph 
                    ticker={selectedGraph.ticker} 
                    values={selectedGraph.history} 
                />
            // </Suspense>
        );
    }

    render() {
        return (
            <div className={styles.graphRender}>
                {this.renderGraph()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ticker: state.graph.selectedTicker,
        graph: state.graph.graphData,
    };
}

export default connect(mapStateToProps)(StockGraph);
