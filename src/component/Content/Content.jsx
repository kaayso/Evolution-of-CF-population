import React, { Component } from 'react';
import Graph from "../Graph/Graph";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Content extends Component {
    state = {
        content : [],
        currentPage: 0
    };
    componentDidMount(){
        this._getDatas().then(data => {
            this.setState({
                content: data
            })
        })
    };
    _getDatas = async () => {
        const url = "http://localhost:8080/api/cf";
        const response = await fetch(url);
        try {
            const json = await response.json();
            return json;
        }catch (e) {
            console.log('Fetch failed ' + e);
        }
    };
    setCurrentPage= (index) => {
        this.setState({
            currentPage: index
        })
    };
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <NavBar setCurrentPage={this.setCurrentPage} currentPage={this.state.currentPage} />
                        <Switch>
                            <Route
                                path="/"
                                exact
                                render={() => <Home data={this.state.content} />}
                            />
                            <Route
                                path="/graph"
                                exact
                                render={() => <Graph data={this.state.content} />}
                            />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Content;
