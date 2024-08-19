import React from "react";
import { IGetMoviesResult } from "../api/interface";

interface ISliderProps {
  section: string;
  title: string;
  list?: IGetMoviesResult;
  zindex: number;
}

const Slider = ({ section, title, list, zindex }: ISliderProps) => {
  return <div></div>;
};

export default Slider;
