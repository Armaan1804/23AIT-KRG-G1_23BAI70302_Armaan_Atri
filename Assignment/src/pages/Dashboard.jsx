import React from 'react';
import WaterTracker from '../components/WaterTracker';
import HealthAdvise from '../components/HealthAdvise';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <WaterTracker />
                </div>
                <div className="max-w-2xl">
                    <HealthAdvise />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
