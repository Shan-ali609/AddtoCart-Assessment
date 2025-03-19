"use client"
import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [timeLeft, setTimeLeft] = useState(getRemainingTime());

    function getRemainingTime() {
      const offerEndTime = new Date().getTime() + 24 * 60 * 60 * 1000; // Offer expires in 24 hours
      return offerEndTime - new Date().getTime();
    }
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1000 : 0));
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const formatTime = (time: number) => {
      const hours = Math.floor(time / (1000 * 60 * 60));
      const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((time % (1000 * 60)) / 1000);
      return `${hours}h : ${minutes}m : ${seconds}s`;
    };

  return (
    <div className="mt-4 p-4  rounded-lg">
    <p className="text-lg font-semibold">Limited Time Offer!</p>
    <p className="text-2xl ">{formatTime(timeLeft)}</p>
  </div>

  )
}

export default Timer