import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IState } from './type'
const baseURL = "https://api.spacexdata.com/v4/launches/";

const LaunchpadScreen: React.FC
  = () => {
    const [isLoading, setLoading] = useState(true);
    const [launch, setLaunch] = useState<IState>({
      name: "",
      date_local: "",
      details: ""

    });
    const { id } = useParams();
    let launchURL = baseURL.concat(id);
    // console.log(launchURL);

    const fetchData = async () => {
      const resp = await fetch(launchURL);
      const data = await resp.json();
      console.log(data);
      setLaunch(data);
      setLoading(false);
    };

    useEffect(() => {
      fetchData();
    }, [fetchData]);

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
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full   mx-auto mt-24 ">
              <div className="mt-4 ">
                <h1 className="text-gray-900 text-3xl title-font  font-medium">
                  {launch.name}
                </h1>
                <h3 className="text-gray-500  text-2xl tracking-widest title-font mb-1">
                  {launch.date_local}
                </h3>
                <p className="mt-1  text-1xl mb-28">
                  {launch.details ? launch.details : "No Details"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default LaunchpadScreen;
