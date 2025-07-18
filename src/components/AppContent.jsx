import React from 'react';
import Header from './Header';

const AppContent = () => {
    return (
        <div className='bg-slate-900 text-white min-h-screen'>
           <div className='max-5xl mx-auto px-4 py-12'>
            <Header/>
           </div>
        </div>
    );
};

export default AppContent;