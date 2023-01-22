import React, { useState, useEffect, useCallback } from 'react';
import dividerSvg from "./images/pattern-divider-desktop.svg";
import iconDive from "./images/icon-dice.svg";

interface Props  {
  slip: string;
  id?: string;
  advice: string;
};

function App({id, advice}: Props) {
  const [slip, setSlip] = useState<any>("");
  //Fetch the api with hooks
    useEffect(() => {
      fetch("https://api.adviceslip.com/advice")
          .then(res => res.json())
          .then(
              (data) => {
                  setSlip(data.slip);
                  console.log(data)
              },
              (error) => {
                return false;
              }
          )
    }, [])

    //Deployment
      const randomAdvice = useCallback(() => {
        fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(
            (data) => {
                setSlip(data.slip);
                console.log(data)
            },
            (error) => {
              return false;
            }
        )      
    }, []);

    return (
      <div className="h-screen bg-darkBlue flex justify-center items-center font-manrope ">
        <div className='bg-darkGrayishBlue max-w-md	 p-6 block text-center shadow-md rounded-lg sm:w-[350px] ' >
          <div className='tracking-widest	uppercase p-2 text-neonGreen'>
            <h1>advice {'#' + slip.id}</h1>
          </div>

          <div className='text-3xl p-2  text-lightCyan'>
          <p key={slip.id}>“{slip.advice}”</p>
          </div>

          <div className='p-6'>
            <img src={dividerSvg} alt="" />
          </div>

          <div className='cursor-pointer absolute inset-x-0 '>
            <button 
            className='
              rounded-full bg-neonGreen p-4
              hover:shadow-[0_0_30px_10px_rgb(82,255,168)] active:shadow-none
              ' 
            onClick={randomAdvice}
            >
              <img src={iconDive} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }

export default App;
