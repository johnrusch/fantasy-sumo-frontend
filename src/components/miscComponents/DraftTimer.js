import React, { useState, useEffect } from 'react'

const DraftTimer = () => {

    const [timeRemaining, setTimeRemaining] = useState({})
    const [seconds, setSeconds] = useState(120);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let timeLeft = secondsToTime(seconds)
        setTimeRemaining(timeLeft)
    }, [])

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

    const startTimer = () => {
        if (timer === 0 && timeRemaining.seconds > 0) {
            setTimer(setInterval(countDown, 1000))
        }
    }

    const countDown = () => {
        let secondsLeft = seconds - 1;
        setTimeRemaining(this.secondsToTime(secondsLeft));
        setSeconds(secondsLeft);
        // Check if we're at zero.
        if (seconds === 0) { 
          clearInterval(this.timer);
        }
    }

    return (
        <div>
            {console.log(timeRemaining)}
            <button onClick={startTimer}>Start Draft Timer</button>
            {timeRemaining.m} : {timeRemaining.s}
        </div>
    )
}

export default DraftTimer;