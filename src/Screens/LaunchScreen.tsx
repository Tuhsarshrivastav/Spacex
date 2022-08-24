import React, { useState, useEffect } from 'react'
import Card from '../components/Card.jsx'
import { Launches } from './type'

const launchpadURL = "https://api.spacexdata.com/v4/launchpads";
const LaunchScreen: React.FC = () => {
    //  Managing States
    const [isLoading, setLoading] = useState(true);
    const [launchpads, setLaunchpads] = useState<Launches[]>([]);

    const fetchData = async () => {
        const resp = await fetch(launchpadURL);
        const data = await resp.json();
        console.log(data)
        setLaunchpads(data);
        setLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {isLoading && (
                        <div className="flex w-full mt-20 z-50 justify-center items-center mx-auto">
                            <div className="flex justify-center items-center">
                                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                                    <span className="visually-hidden"></span>
                                </div>
                            </div>

                        </div>
                    )}
                    {launchpads.map(({ name, images, details, status, launches }) => (
                        <Card name={name} images={images} details={details} status={status
                        } launches={launches} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LaunchScreen