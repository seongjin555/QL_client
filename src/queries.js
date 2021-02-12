import gql from "graphql-tag";

export const car_all = gql`
  {
  car_table_all{
    car_id
    car_number
    ent_time
    ext_time
    ent_weight
    ext_weight
	  }
  }
`;


