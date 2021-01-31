import React, {useState} from "react";

import { DropdownButton, Dropdown } from 'react-bootstrap';

import "./style.css"

const SortMenu = (props) => {

    const [sortMethod, setSortMethod] = useState("Sort Products");

    return (
        <DropdownButton id="dropdown-item-button" title={sortMethod} className="filterMenu">
            <Dropdown.Item as="button" onClick={() => {setSortMethod("Ascending Price"); props.selectHandler("ascending")}}>Ascending Price</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => {setSortMethod("Descending Price"); props.selectHandler("descending")}}>Descending Price</Dropdown.Item>
        </DropdownButton>
    )
}

export default SortMenu;