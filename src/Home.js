import React from "react";
import { car_all } from "./queries";
import { useQuery } from "react-apollo-hooks";

export default () => {
  const { data } = useQuery(car_all);
  if(data){
    console.log(data.car_table_all)
    return <span> {data.car_table_all} </span>
  }
}