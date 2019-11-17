import React, { Component } from 'react';
import './Home.css';

import Header from "../landingpage/header";
import Main from "../landingpage/main";
import Footer from "../landingpage/footer";

class Home extends Component {
    render() {
        return (
            <div className="TheBox">
                <Header />
                <Main />
            </div>
        );
    }
}

export default Home;