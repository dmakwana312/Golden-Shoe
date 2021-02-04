import React, { useState } from "react";

import { Button, Row, Accordion, Card, Form } from 'react-bootstrap';

import "./style.css"

const Sidebar = (props) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarClass, setSidebarClass] = useState("sidebar close");
    const [filterBtnClass, setFilterBtnClass] = useState("filterBtn");

    const updateFilters = (event) => {
        const target = event.target;
        var value = target.value;
        props.filterFunction(value);
    }


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

    const capitaliseFirstLetter = (word) => {
        return(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return (
        <div>
            <Button className={filterBtnClass} onClick={sidebarHandler}>
                <i className="fa fa-chevron-up"></i>Filter<i className="fa fa-chevron-up"></i></Button>
            <div className={sidebarClass}>
                <Row className="heading">
                    <span className="title"><h2>Filter</h2></span>
                    <span className="closeButton"><Button variant="secondary" onClick={sidebarHandler}>&times; Close</Button></span>
                </Row>
                <div className="filterOptions text-left">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Gender
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Form>
                                        <Form.Check type="checkbox" value="male" onChange={updateFilters} label="Male" />
                                        <Form.Check type="checkbox" value="female" onChange={updateFilters} label="Female" />
                                    </Form>


                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        
                    </Accordion>
                    <Accordion defaultActiveKey="1">
                        
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Styles
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Form>
                                        
                                        {props.styles.map((value, key) => {
                                            return (
                                                
                                                <Form.Check key={key} type="checkbox" value={value} onChange={updateFilters} label={capitaliseFirstLetter(value)} />


                                            );
                                        })}
                                    </Form>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>





            </div>
        </div>
    )
}

export default Sidebar