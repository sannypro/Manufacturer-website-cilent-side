import React from 'react';
import bannerImg from '../../../Assets/img/banner-img.png'
import Parts from '../../../Parts/Parts';
import BusinessSummary from '../../BusinessSummary/BusinessSummary';
import GetInTouch from './GetInTouch';
import Partners from './Partners';
import Reviews from './Reviews';
import bannerImg2 from '../../../Assets/img/istockphoto-520977101-170667a-removebg-preview.png'

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-primary text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <div className="carousel w-full">
                            <div id="item1" className="carousel-item w-full">
                                <img src={bannerImg2} className="lg:max-w-full xs:max-w-xs rounded-lg " alt='' />
                            </div>
                            <div id="item2" className="carousel-item w-full">
                                <img src={bannerImg} className="lg:max-w-full xs:max-w-xs rounded-lg " alt='' />
                            </div>
                        </div>

                    </div>
                    <div className='lg:container sm:container '>
                        <h1 className="text-5xl font-bold">Loyal Car Parts Manufacturer</h1>
                        <p className="py-6">Enjoy entirely new level of driving experiance with our in depth selection of superior car engine,car bulbs, brake pads, spark plugs, and other automotive parts and accessories designed to keep your car running at its absolute best..</p>

                    </div>
                </div>
            </div>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Partners></Partners>
            <Reviews></Reviews>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;