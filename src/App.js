import data from './data';
import Tours from './components/Tours';
import React, { useState } from "react";

const App = () => {
 
  const [tourData, setTours] = useState(data); // array of objects
    
  function removeTour(id){
    const newTours = tourData.filter(tour => {return tour.id !== id})
    setTours(newTours);
  }

  if (tourData.length === 0){  // data not fetched properly / no elts found
    return(
      <div className="h-[100vh] flex items-center justify-center flex-col"> 
        <h2 className="font-[700] text-[30px]">No Tours Left</h2>
        <button className="mt-[18px] py-[10px] px-[80px] border-[1px] border-solid border-white cursor-pointer hover:bg-[white] hover:text-[black] hover:transition-all hover:transition-duration-[0.2s]" onClick={() => setTours(data)}>Refresh</button>
    </div>
    );
  }
 
  return (

  <div className="flex flex-col justify-center items-center mb-[50px]">
    <h1 className="text-[3rem] m-[6vh] border-[7px] border-dashed border-[rgb(1,17,160)] rounded-[20px] py-[1vh] px-[5vw] font-[800]">Plan your Trip</h1>
    <Tours tours={tourData} removeTour={removeTour}></Tours>
  </div>

  );
}

export default App;
