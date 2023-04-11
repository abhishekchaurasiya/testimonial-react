import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";


function App() {

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">

        <h1 className=" font-bold text-4xl">Our Testimonial</h1>

        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>

        <Testimonial reviews={reviews} />
      </div>

    </div>
  );
}

export default App;
