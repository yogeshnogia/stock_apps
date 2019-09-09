import React, { Fragment } from "react";

import up from "../../assets/img/up.png";
import down from "../../assets/img/down.png";
import plus from "../../assets/img/plus.png";

/* 
A dumb component to render the individual rows of the table.
*/
function getColor(change) {
    if (change > 0) return "green";
    else if (change < 0) return "red";
    else return "blue";
}

function getImage(change) {
    if (change > 0) return up;
    else if (change < 0) return down;
    else return plus;
}

/* 
We display the relative time instead of the actual timestamp.
*/
function displayLastUpdatedAs(lastUpdated) {
    return lastUpdated.fromNow();
}

const Stock = (props) => (
    <Fragment>
        <td>{props.values.ticker}</td>
        <td>{props.values.price}</td>
        <td style={{color: getColor(props.values.change)}}>
            <img src={getImage(props.values.change)} />&nbsp;
            {props.values.change}
        </td>
        <td>{displayLastUpdatedAs(props.values.lastUpdated)}</td>
    </Fragment>
)

export default Stock;
