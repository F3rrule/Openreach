import { useState, useEffect } from 'react';
export default function AllData() {
    const [exchange, setExchange] = useState('');
    const [pon, setPon] = useState('');

    useEffect(() => {
        console.log('State Updated ' + exchange);
    }, [exchange]);
    
    useEffect(() => {
        console.log('State Updated ' + pon);
    }, [pon]);

    return (
        <>
            <input
                type="text" onChange={(e) => {
                    setExchange(e.target.value);

                }}
            />
            <h2> Lets get the Exchange name for {exchange}</h2>
            <input
                type="text" onChange={(e) => {
                    setPon(e.target.value);

                }}
            />
            <h2> Lets get the Pon name for {pon}</h2>
            
        </>

    );
}