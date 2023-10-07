import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export const useAppContext = () => useContext(AppContext);
