import { useContext } from "react";
import { ColorContext } from "../components/ColorProvider.jsx";

export const useColors = () => useContext(ColorContext);
