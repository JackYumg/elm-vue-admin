import gql from "graphql-tag";

export const passageList = gql`query queryData($pageoption:PassagePationOptionInput! ){
    passageList(pationOption: $pageoption){
      data{
        name,
        id,
        images,
        desc,
        mainImage,
        createDate,
        origin,
        originAddr,
        tags{
          id,
          name,
          color
        }
      },
      total
    }
  }`;