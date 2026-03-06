import React from 'react' ;
import {useState, useEffect} from 'react' ;
import getData from '../data/getData';

const HealthAdvise = () => {
    const [advise, setAdvise] = useState("") ;
    const [change, setChange] = useState(false) ;


    useEffect(() => {
        async function fetchAdvise(){
            try {
                const data = await getData() ;
                setAdvise(data.slip?.advice || "Stay hydrated and healthy!");
            } catch (error) {
                console.error(error);
                setAdvise("Stay hydrated and healthy!");
            }
        } ;
        fetchAdvise() ;
    }, [change]) ; // only for the initial Render

    const handleClick = () => {
        setChange(!change) ;
    }
     
    return (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 shadow-md border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">💡 Today's Health Advice</h2>
            <p className="text-gray-700 text-lg mb-6 min-h-[60px]">
                {advise || "Loading health advice..."}
            </p>
            <button 
                onClick={handleClick}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
                Refresh Advice
            </button>
        </div>
    )
} ;

export default HealthAdvise ;