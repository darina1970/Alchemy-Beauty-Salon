import React from 'react';
import PriceBlock from '../../../components/Rooms/Price/PriceBlock';
import { tanPrices } from './tanPriceData';

const TanRoom = () => {
    return (
        <>
            <PriceBlock
                pricesByTab={tanPrices}
                theme= 'dark'
                variant='dark'
                tableTheme='tanning'
            />
        </>
    );
};

export default TanRoom;