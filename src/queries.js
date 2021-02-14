import gql from "graphql-tag";

export const car_all = gql`
  {
  car_table_all{
    car_id
    car_number
    time
    weight
	  }
  }
`;


