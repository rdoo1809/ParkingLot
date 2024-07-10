import React, {useEffect, useState} from 'react';
import TimeKeeper from "../TimeKeeper/TimeKeeper";


const ParkingManager = () => {
    const [parking, setParking] = useState(3);
    const [currentPlate, setCurrentPlate] = useState('');
    const [activeCars, setActiveCars] = useState([]);
    const [exitCost, setExitCost] = useState('');

    const handleInputChange = (event) => {
        setCurrentPlate(event.target.value);
    };

    const enterPlate = () => {
        if (parking === 0) {
            alert("Lot Full. No spots available.");
        } else {
            //decrement parking
            setParking(parking - 1);

            //add current plate to array of cars
            let newCar = [currentPlate, 'timer'];
            setActiveCars([...activeCars, newCar]);

            //update table - clear form
            console.log(activeCars);
        }
        setCurrentPlate('');
    }

    const exitCar = (cost, index) => {
        //get exitCost for the specific car
        setExitCost(cost);

        //alert attendant of car leaving and cost to charge
        alert(`Car exiting lot. \nPlate - ${activeCars[index][0]} \nCost: ${cost}`);

        //increment available spots
        setParking(parking + 1);

        //remove from array of cars
        setActiveCars(activeCars.filter((car, i) => i !== index));
    }; //cost is undefined on first run

    return (
        <div className={'bg-teal-500 w-2/3 p-10 mt-6 rounded-2xl shadow-2xl'}>
            <p className="text-3xl font-bold">ParkEz-5001</p>
            <div>
                <p className={'text-left font-bold'}>Available Spots - {parking}/3</p>
            </div>
            <div>
                <label className={'text-left font-bold'}>Enter License Plate:</label>
                <input onChange={handleInputChange} value={currentPlate}
                       className={'mx-2'} type={'text'}/>
                <input type={"submit"} value={"Enter"}
                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                       onClick={enterPlate}
                       disabled={currentPlate === ''}/>
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
                    {
                        activeCars.map((car, index) => {
                            return (
                                <tr key={index}>
                                    <td className="px-4 py-4 uppercase">{car[0]}</td>
                                    <TimeKeeper index={index} onExitCar={exitCar}/>
                                    {/*<td className="px-6 py-4">*/}
                                    {/*    <button onClick={()=>exitCar(index)} className={'text-red-600 font-bold'}>X</button>*/}
                                    {/*</td>*/}
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
