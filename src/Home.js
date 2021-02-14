import React from "react";
import { car_all } from "./queries";
import { useQuery } from "react-apollo-hooks";

const Home = () => {
  const { data, loading, error } = useQuery(car_all);

  if (!loading && !error && data) {
    return (
      <div>
        <div id="_1024_kg">
          <span>중량: {data.car_table_all[0].weight}Kg</span>
        </div>
        <div id="_2024_kg">
          <span>중량: {data.car_table_all[1].weight}Kg</span>
        </div>
        <div id="ent">
          <span>입차</span>
        </div>
        <div id="ext">
          <span>출차</span>
        </div>
        <div id="ID2021_02_7_21_03">
          <span>{data.car_table_all[0].time}</span>
        </div>
        <div id="ID2021_02_7_21_03_ba">
          <span>{data.car_table_all[1].time}</span>
        </div>
        <div id="_1">
          <svg class="_1_bc">
            <rect id="_1_bc" rx="0" ry="0" x="0" y="0" width="333" height="93">
            </rect>
          </svg>
          <div id="ID14_2923">
            <span>{data.car_table_all[1].car_number}</span>
          </div>
        </div>
        <div id="__14_2923">
          <span>차량 번호: {data.car_table_all[1].car_number}</span>
        </div>
        <div id="__1000kg">
          <span>화물 중량: {data.car_table_all[1].weight - data.car_table_all[0].weight}Kg</span>
        </div>
      </div>
    )
  }
  else {
    return null;
  }
}
export default Home;
