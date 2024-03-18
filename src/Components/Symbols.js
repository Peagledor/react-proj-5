import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
    const currentDisplay = useSelector(selectDisplay);
    return <div></div>;
}

export default Symbols;