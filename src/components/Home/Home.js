import React from 'react';

const Home = () => {
    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 mt-20 h-screen'>
            <div className="m-auto bg-green-900 text-green-200 font-bold w-96 flex justify-center items-center h-96 p-10 rounded hover:scale-125 duration-200"  >
                <p className='font-bold text-4xl'>Use jsonplaceholder for showing friend data.</p>
            </div>
            <div className="m-auto bg-green-900 text-green-200 font-bold w-96 flex justify-center items-center h-96 p-10 rounded hover:scale-125 duration-200"  >
                <p className='font-bold text-4xl'>Use restcountries to show country information.</p>
            </div>
        </div>
    );
};

export default Home;