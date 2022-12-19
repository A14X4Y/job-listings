import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPositions } from "./positions-slice";
import data from "../../mock/data.json";

const usePositions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPositions(data));
  });
};

export default usePositions;
