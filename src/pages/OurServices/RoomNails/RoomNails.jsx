import React from 'react';
import PriceBlock from '../../../components/Rooms/Price/PriceBlock';
import { nailsTabs, nailsPricesByTab } from './nailsPriceData';


const NailsRoom = () => {
    return (
        <>
            <PriceBlock
                tabs={nailsTabs}
                defaultTabKey='manicure'
                pricesByTab={nailsPricesByTab}
                theme= 'light'
                variant='light'
            />
        </>
    );
};

export default NailsRoom;