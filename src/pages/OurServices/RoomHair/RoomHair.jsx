import React from 'react';
import PriceBlock from '../../../components/Rooms/Price/PriceBlock';
import { hairTabs, hairPricesByTab } from './hairPriceData';


const HairRoom = () => {
    return (
        <>
            <PriceBlock
                tabs={hairTabs}
                defaultTabKey='womenCuts'
                pricesByTab={hairPricesByTab}
                theme= 'light'
                variant='light'
            />
        </>
    );
};

export default HairRoom;