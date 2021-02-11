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

export const car_img = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;
