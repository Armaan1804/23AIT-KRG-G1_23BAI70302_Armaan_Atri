import React from 'react' ;
import {useState, useEffect} from 'react' ;

const WaterTracker = () => {
    const [count, setCount] = useState(0) ;
    const [goal, setGoal] = useState(8) ;
    const [value, setValue] = useState("") ; 

    const handleChange = (e) => {
        const temp =  e.target.value ;
        if(temp == "") return ;
        setValue(temp) ;
    }
    const handleIncrease = () => {
        if(count + 1 == goal) {
            alert("Completed Your goal for today.") ;
        }
        setCount(count + 1) ;
    }

    const handleGoal = () => {
        if(value == "") return ;
        setGoal(Number(value)) ;
    }
    const handleDecrease = () => {
        setCount(count - 1) ;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">💧 Water Tracker</h1>
                    
                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-8 mb-8 text-center">
                        <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">Current Progress</p>
                        <p className="text-6xl font-bold text-blue-600">{count}</p>
                        <p className="text-gray-600 mt-2">out of {goal} glasses</p>
                        <div className="w-full bg-gray-300 rounded-full h-4 mt-6">
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full transition-all duration-300" style={{ width: `${(count / goal) * 100}%` }}></div>
                        </div>
                    </div>

                    <div className="space-y-6 mb-8">
                        <div className="flex gap-3">
                            <input 
                                type="number"
                                value={value} 
                                placeholder="Enter your goal" 
                                onChange={handleChange}
                                className="flex-1 px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                            />
                            <button 
                                onClick={handleGoal}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                            >
                                Set Goal
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <button 
                            onClick={handleIncrease}
                            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-xl"
                        >
                            ➕ Add Glass
                        </button>
                        <button 
                            onClick={handleDecrease}
                            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-xl"
                        >
                            ➖ Remove Glass
                        </button>
                    </div>

                    <button 
                        onClick={() => setCount(0)}
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Reset Tracker
                    </button>
                </div>
            </div>
        </div>
    ) ;
} ; 
export default WaterTracker ;