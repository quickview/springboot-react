import React, {Component} from "react";
import {Navbar} from "react-bootstrap";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import MainComponent from "../main/MainComponent";
import DashboardComponent from "../dashboard/Dashboard";

class TopMenuComponent extends Component{
    render(){
        return (
            <BrowserRouter>
                        <Navbar bg="dark" variant="dark" className="mb-4">
                            <Navbar.Brand href="/">
                                Home
                            </Navbar.Brand>

                            <Navbar.Brand href="/main">
                                Main
                            </Navbar.Brand>

                            <Navbar.Brand href="/dashboard">
                                Dashboard
                            </Navbar.Brand>
                        </Navbar>
                        
                <Routes>
                    <Route path="/main" element={<MainComponent/>}></Route>
                    <Route path="/dashboard" element={<DashboardComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default TopMenuComponent;