import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './shared/Footer';
import Header from './shared/Header';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Home;