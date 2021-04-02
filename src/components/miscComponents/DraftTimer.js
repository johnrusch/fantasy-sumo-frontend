import React, { useState } from 'react'

const DraftTimer = () => {

    const [timeRemaining, setTimeRemaining] = useState({})
    const [timeInSeconds, setTimeInSeconds] = useState(120)

    const secondsToTime = (secs) => {

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "m": minutes,
            "s": seconds
          };
        return obj;
    }

    const countDown = () => {
        let seconds = timeRemaining - 1;
        setTimeRemaining({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
          clearInterval(this.timer);
        }
    }

    return (
        <div>
            {timeRemaining.m} : {timeRemaining.s}
        </div>
    )
}

export default DraftTimer;