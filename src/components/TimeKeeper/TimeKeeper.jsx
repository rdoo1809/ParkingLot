import React, {useEffect, useState} from 'react';

const TimeKeeper = () => {
    const [seconds, setSeconds] = useState(0);
    const [cost, setCost] = useState('$0.00')

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
            if (seconds >= 30) {
                setCost('DAILY MAX - $4.00');
                clearInterval(interval);
                return;
            }
            //max 120 seconds = $4.00
            // per second approx = 0.033
            let goingRate = `\$${(0.033 * seconds).toFixed(2)}`;
            setCost(goingRate);

        }, 1000);
        return () => clearInterval(interval);
    }, [seconds]);


    return (
        <>
            <td className="px-6 py-4">{cost}</td>
        </>
    );
}

export default TimeKeeper;
