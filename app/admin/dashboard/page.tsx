'use client';

import React from 'react';


export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    {/* Dashboard content goes here */}
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Stats cards */}
                    </div>
                </div>
            </div>
        </div>
    );
}