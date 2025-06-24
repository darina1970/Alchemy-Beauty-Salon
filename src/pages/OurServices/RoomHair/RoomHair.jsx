import React from 'react';
import PriceBlock from '../../../components/Rooms/Price/PriceBlock';
import { hairTabs, hairPricesByTab } from './hairPriceData';


const HairRoom = () => {
    return (
        <div>
            <h1>Комната волос</h1>
            <PriceBlock
                tabs={hairTabs}
                defaultTabKey='womenCuts'
                pricesByTab={hairPricesByTab}

            />
        </div>
    );
};

export default HairRoom;