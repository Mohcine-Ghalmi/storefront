import React from "react";
import Shopcart from "./shopcart";
import list from "../data";
import "../Styles/amazon.css";

const Amazon = () => {
    return (
        <div>
            {list.map((list) => (
                <Shopcart key={list.id} list={list}/>
            ))}
        </div>
    )
}

export default Amazon;