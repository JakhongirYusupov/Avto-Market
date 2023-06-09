import { gql } from "@apollo/client";

const GET_CATEGORY = gql`
  query {
    getCategory {
      status
      message
      data
    }
  }
`;

const GET_CARS_INFO = gql`
  query ($categoryId: Int!, $carId: Int!) {
    getCarInfo(category_id: $categoryId, car_id: $carId) {
      status
      message
      data
    }
  }
`;

const GET_CATEGORY_CARS = gql`
  query ($categoryId: Int!) {
    getCars(category_id: $categoryId) {
      status
      message
      data
    }
  }
`;

export { GET_CATEGORY, GET_CATEGORY_CARS, GET_CARS_INFO };
