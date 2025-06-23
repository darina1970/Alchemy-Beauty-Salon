import React from 'react';
import PriceBlock from '../../../components/Rooms/Price/PriceBlock';
import { hairTabs, hairPricesByTab, hairNotesByTab } from './hairPriceData';


const HairRoom = () => {
    return (
        <div>
            <PriceBlock
                tabs={hairTabs}
                defaultTabKey='womenCuts'
                pricesByTab={hairPricesByTab}
                notesByTab={hairNotesByTab}

            />
        </div>
    );
};

export default HairRoom;