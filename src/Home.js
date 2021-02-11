import React from "react";
import { car_all } from "./queries";
import { useQuery } from "react-apollo-hooks";

export default () => {
  const { data } = useQuery(car_all);
  console.log(data)
  if(data && data.car_table_all){
  }
  return <h1> hello wolrd</h1>
}
