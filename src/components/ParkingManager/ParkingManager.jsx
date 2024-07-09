import React, {useEffect, useState} from 'react';


const ParkingManager = () => {
    const [parking, setParking] = useState(3);
    const [currentPlate, setCurrentPlate] = useState('');
    const [activeCars, setActiveCars] = useState([]);


    const Timer = ({initialSeconds}) => {
        const [seconds, setSeconds] = useState(initialSeconds);
        useEffect(() => {
            const interval = setInterval(() => {

                //setParking(prevParking => prevParking + 1);
                //perform calc


            }, 1000);

            return () => clearInterval(interval); // Cleanup interval on component unmount
        }, []);
    };

    const handleInputChange = (event) => {
        setCurrentPlate(event.target.value);
    };

    const enterPlate = () => {
        //decrement parking
        setParking(parking - 1);

        //add current plate to array of cars
        let newCar = [currentPlate, new Timer(10000)];
        setActiveCars([...activeCars, newCar]);

        //update table
        console.log(activeCars);
    }


    return (
        <div className={'bg-teal-500 w-2/3 p-4 mt-6'}>
            <p className="text-3xl font-bold">ParkEz-5001</p>
            <div>
                <p className={'text-left font-bold'}>Available Spots - {parking}/3</p>
            </div>
            <div>
                <label className={'text-left font-bold'}>Enter License Plate:</label>
                <input onChange={handleInputChange}
                       className={'mx-2'} type={'text'}/>
                <input type={"submit"} value={"Enter"}
                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                       onClick={enterPlate}/>
            </div>
            <div className={'mt-4'}>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                    <tr className="bg-gray-50">
                        <th scope="col">Registered
                        </th>
                        <th scope="col">$ Owed on Exit
                        </th>
                        <th scope="col">Dispatch
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-500">
                    <tr>
                        <td className="px-4 py-4 uppercase">axbh700</td>
                        <td className="px-6 py-4">$1.50</td>
                        <td className="px-6 py-4">
                            <a href={'/'} className={'text-red-600 font-bold'}>X</a>
                        </td>
                    </tr>
                    {
                        activeCars.map((car, index) => {
                            return (
                                <tr key={index}>
                                    <td className="px-4 py-4 uppercase">{car[0]}</td>
                                    <td className="px-6 py-4">{car[1]}</td>
                                    <td className="px-6 py-4">
                                        <a href={'/'} className={'text-red-600 font-bold'}>X</a>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ParkingManager;
