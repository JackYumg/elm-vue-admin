import gql from "graphql-tag";

export const getAuthCodeImage = gql`
query D ($timer :String!){
    getSmsCoddeImage(timer: $timer){
      data,
      message,
      code
    }
  }
` 