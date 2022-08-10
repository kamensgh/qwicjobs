import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../api/axios";
import uuid from 'react-uuid'
import { Link } from "react-router-dom";

import Shimmer from "react-js-loading-shimmer"; 
const PROVIDERS_URL = "api/v1/users/service-providers";







const ServiceproviderCards = () => {
    const [loading, setloading] = useState(true);
    const [provider, setProvider] = useState([]);
    const [loadingProviders, setloadingProviders] = useState(true);



    useEffect(() => {
        getProviders();
    }, []);

    const getProviders = async () => {
        setloadingProviders(true);
        try {
            const response = await axiosRequest.get(PROVIDERS_URL);
            const res = response.data.data;
            console.log("response from service provider cards js",res);
            setProvider(res);
            setloadingProviders(false);
        } catch (err) {
            console.log(err);
            setloadingProviders(false);
        }
    };




    const providerPlaceholder = () => {
        const n = 10;
        return [...Array(n)].map((elem, index) => (
            <div className="col mb-4" key={index}>
                <div className="card p-4 providercard">
                    <div className="mb-3 image">
                        <Shimmer/>
                    </div>
                    <div className="text">
                        <Shimmer />
                        <Shimmer />
                        <Shimmer />
                    </div>
                </div>
            </div>
        ));
    };



    
    return (
        <>
            {!loadingProviders ? (
                        <div className="col mb-4" key={uuid}>
                            <div className="card" >
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/cardimg1.png`}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title fw-bold text-center mb-0">
                                            {provider.firstName + " " + provider.surname}
                                        </h5>
                                        <p className="text-center">Carpenter</p>
                                    </div>
                                    <p className="card-text">
                                        {provider.ServiceProvider[0].aboutSelf}
                                    </p>
                                    <Link
                                        to={`/workerDetails/${provider.id}`}
                                        className="stretched-link"
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    
                
                    )
                :
                providerPlaceholder()
            }
        </>
    )
}

export default ServiceproviderCards