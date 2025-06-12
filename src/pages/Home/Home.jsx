import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import About from './sections/About/About';
import {headerConfigs} from '../../config/headerConfigs';

const HomePage = () => {
    return (
        <MainLayout headerProps={headerConfigs.home}>
            <About variant="light" />
        </MainLayout>
    );
};

export default HomePage;

