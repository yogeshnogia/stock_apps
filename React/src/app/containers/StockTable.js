import React, { Component, lazy, Suspense } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectTicker } from "../actions/Actions";

// const Stock = lazy(() => import("../components/Stock"));

import Stock from "../components/Stock";

import styles from "../../assets/css/stocks.css";

/* 
This smart component gets the 'data' state from the store and uses it to 
render the table everytime it is updated. We also dispatch an action to 
update the 'graph' state of the store whenever a row is clicked. We save 
the name of the ticker clicked to it.

We also use lazy loading to load the rows after we get the data which in 
turn decreases our entry bundle size and increases performance.
*/
class StockTable extends Component {
    
    renderTable() {
        const tempUI = 
            <tr>
                <td>...</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>...</td>
            </tr>;
        if (!this.props.data) {
            return (tempUI);
        }
        return (
            // <Suspense fallback={tempUI}>
                this.props.data.map(row => {
                    return (
                        <tr 
                            key={row.ticker}
                            onClick={() => this.props.selectTicker(row.ticker)}
                        >
                            <Stock values={row} />
                        </tr>
                    );
                })
            // </Suspense>
        );
    }

    render() {
        return (
            <table className={styles.stockTable}>
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTable()}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectTicker: selectTicker}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StockTable);
