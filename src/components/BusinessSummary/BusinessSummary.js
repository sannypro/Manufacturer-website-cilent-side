import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import revenue from '../../Assets/img/Untitled_design-1.png'

const BusinessSummary = () => {
    return (
        <div> <h1 className="text-5xl text-center font-bold">Business Summary</h1>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={revenue} className="lg:max-w-full rounded-lg " alt='' />
                    <div>

                        <p className="py-6"> in Bangladesh number 1 Manufacturer of Online Car Parts! We offer service parts at very competitive prices with Free Delivery across the whole of Great Bangladesh (BD). We specialize in all the major car parts – brake pads, blades, batteries, bulbs, and all the essential car maintenance essentials – engine oil, car fluids – all available to order online today! And don’t forget, we have a massive range of interior accessories such as Sat Navs, stereos and speakers. If you need any further information before ordering your car parts  online then our dedicated team are on hand with expert advice and assistance.</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;