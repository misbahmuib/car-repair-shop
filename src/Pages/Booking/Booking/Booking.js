import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>This is booking Section{serviceId} </h2>
            <p><small className="text-danger">Develop under Construction</small></p>

        </div>
    );
};

export default Booking;