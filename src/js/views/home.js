import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CarauselItem from "../component/CarauselItem";
import TitleH1 from "../component/TitleH1";

export const Home = () => {
  return (
    <>
	<div>
    <TitleH1 title={"Character"}/>
	  <CarauselItem nature="people"/>
    </div>
	<div>
    <TitleH1 title={"Planets"}/>
	  <CarauselItem nature="planet"/>
    </div>
    </>
  );
};
