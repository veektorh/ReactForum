import React from 'react'
import Nav from '../../components/home/Nav';
import SearchSection from '../../components/home/searchSection';
import Content from '../../components/home/content';
import '../../css/home.css';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            
            <Nav />
            <SearchSection />
            <Content />
        </div>
    )
}


export default Home