import React from 'react';
import bannerImg from '../../../Assets/img/banner-img.png'

const Home = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} class="lg:max-w-full sm:max-w-full rounded-lg " alt='' />
                    <div className='lg:container sm:container '>
                        <h1 class="text-5xl font-bold">Loyal Car Parts Manufacturer</h1>
                        <p class="py-6">Enjoy entirely new level of driving experiance with our in depth selection of superior car engine,car bulbs, brake pads, spark plugs, and other automotive parts and accessories designed to keep your car running at its absolute best..</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;