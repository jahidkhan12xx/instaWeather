import Navbar from "@/components/Navbar";
import React from "react";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center h-[50vh]">
        <h2 className=" text-center text-xl font-bold ">
          We Provide Weather Info
        </h2>
      </div>
    </div>
  );
};

export default About;
