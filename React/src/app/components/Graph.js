import React, { Fragment } from "react";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Graph = (props) => {
    return (
        <Fragment>
            <h4>{props.ticker}</h4>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={props.values}>
                    <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ff27db" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#3527b1" stopOpacity={0.2}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#CCC" />
                    <XAxis dataKey="lastUpdated" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="price" stroke="#ff27db" fillOpacity={1} fill="url(#colorPrice)"/>
                </AreaChart>
            </ResponsiveContainer>
        </Fragment>
    );
}

export default Graph;
