import React from 'react';


const ParkingManager = () => {


    return (
        <div className={'bg-teal-500 w-2/3 p-4 mt-6'}>
            <p className="text-3xl font-bold">ParkEz-5000</p>

            <div>
                <p className={'text-left font-bold'}>Available Spots - 3/3</p>
            </div>
            <div>
                <label className={'text-left font-bold'}>Enter License Plate:</label>
                <input className={'mx-2'} type={'text'}/>
                <input type={"submit"} value={"Enter"}
                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"/>
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
                    <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-4 py-4 uppercase">axbh700</td>
                        <td className="px-6 py-4">$1.50</td>
                        <td className="px-6 py-4">
                            <a className={'text-red-600 font-bold'}>X</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ParkingManager;
