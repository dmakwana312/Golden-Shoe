import React, { useState } from "react";

import { Button } from 'react-bootstrap';

import "./style.css"

const Sidebar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarClass, setSidebarClass] = useState("sidebar close");
    const [filterBtnClass, setFilterBtnClass] = useState("filterBtn");

    const sidebarHandler = () => {
        if (sidebarOpen) {
            setFilterBtnClass("filterBtn")
            setSidebarClass("sidebar close")

            setTimeout(() => {

                setSidebarOpen(false);
            }, 500);
        }
        else {
            setFilterBtnClass("filterBtn open")
            setSidebarClass("sidebar")

            setTimeout(() => {
                setSidebarOpen(true);
            }, 500);
        }

    }

    return (
        <div>
            <Button className={filterBtnClass} onClick={sidebarHandler}>
                <i className="fa fa-chevron-up"></i>Filter<i className="fa fa-chevron-up"></i></Button>
            <div className={sidebarClass + " bg-primary"}>

                <h2>Sidebar</h2>
                <button id="close" onClick={sidebarHandler}>&times; close</button>
            </div>
        </div>
    )
}

export default Sidebar