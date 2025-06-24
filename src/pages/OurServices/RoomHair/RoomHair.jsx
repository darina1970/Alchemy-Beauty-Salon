import React from 'react';
import PriceBlock from '../../../components/Rooms/Price/PriceBlock';
import { hairTabs, hairPricesByTab } from './hairPriceData';


const HairRoom = () => {
    return (
        <>
            <section className='section section-light'>
                <div className="container">
                    <PriceBlock
                        tabs={hairTabs}
                        defaultTabKey='womenCuts'
                        pricesByTab={hairPricesByTab}
                        theme= 'light'
                    />
                </div>
            </section>
        </>
    );
};

export default HairRoom;