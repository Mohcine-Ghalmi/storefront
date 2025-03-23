import React from "react";
import "./Styles/Cartform.css"
import Navbar from "./Cartcomponent/Navbar";
import Amazon from "./Cartcomponent/amazon";
import Shopcart from "./Cartcomponent/shopcart";

const Cartform = () => {
    return (
        <div>
            <Navbar />
            <Amazon />
            <Shopcart />
        </div>
    )
}

export default Cartform;