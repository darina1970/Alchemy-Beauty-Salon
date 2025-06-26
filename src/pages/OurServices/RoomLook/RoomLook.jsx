import React from 'react';
import PriceBlock from '../../../components/Rooms/Price/PriceBlock';
import { lookPrices } from './lookPriceData';


const LookRoom = () => {
    return (
        <>
            <PriceBlock
                pricesByTab={lookPrices}
                theme= 'light'
                variant='light'
            />
        </>
    );
};

export default LookRoom;