import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {headerConfigs} from '../../config/headerConfigs';

const ServicesPage = () => {
    return (
        <MainLayout headerProps={headerConfigs.services}></MainLayout>
    );
};

export default ServicesPage;