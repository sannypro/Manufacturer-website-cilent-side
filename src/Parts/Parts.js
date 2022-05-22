import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Part from './Part/Part';

const Parts = () => {

    return (
        <div className='container sm:container'>
            <h1 className='text-4xl text-center'>
                Car Parts
            </h1>
            <Part></Part>
        </div>
    );
};

export default Parts;