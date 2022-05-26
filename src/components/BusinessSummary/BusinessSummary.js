
import React from 'react';
import './Business.css'
import { GiProgression } from 'react-icons/gi';
import { VscPreview } from 'react-icons/vsc';
import { BsTools } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
const BusinessSummary = () => {
    return (
        <div> <h1 className="text-5xl text-center uppercase text-green-600  mt-10 font-bold">Millions business trust us</h1>
            <div className=" container ">
                <div className=" grid my-20 grid-cols-1 justify-items-center text-center lg:grid-cols-4 gap-20">


                    <div className='flex justify-center'>
                        <div>
                            <div className='flex justify-center'>< GiProgression className='text-size  text-green-600'></GiProgression></div>
                            <p className="text-2xl font-bold"> 120M+ Annual revenue</p>
                        </div>

                    </div>
                    <div>
                        <div>
                            <div className='flex justify-center'><VscPreview className='text-size text-green-600'></VscPreview></div>
                            <p className="text-2xl font-bold"> 33K+ Reviews</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='flex justify-center'>
                                <BsTools className='text-size text-green-600'></BsTools>
                            </div>
                            <p className="text-2xl font-bold">50+ Tools</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='flex justify-center'>
                                <IoIosPeople className='text-size text-green-600'></IoIosPeople>
                            </div>
                            <p className="text-2xl font-bold">Served 100+ customers</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;