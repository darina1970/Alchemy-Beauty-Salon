import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import {headerConfigs} from '../../config/headerConfigs';

const ServicesPage = () => {
    const navigate = useNavigate();


    return (
        <MainLayout headerProps={headerConfigs.services}>
            <button onClick={() => navigate('/services/hair')}>
                Волосы
            </button>
            <button onClick={() => navigate('/services/nails')}>
                Ногти
            </button>
            <button onClick={() => navigate('/services/look')}>
                Взгляд
            </button>
            <button onClick={() => navigate('/services/tan')}>
                Загар
            </button>
        </MainLayout>
    );
};

export default ServicesPage;




