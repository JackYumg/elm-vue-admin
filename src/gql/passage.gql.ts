import gql from 'graphql-tag';

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

export const passageAdd = gql`mutation addPassage($passage: PassageInput){
  createPassage  (passage: $passage) {
    name,
    content,
  }
}`;

export const getPassageById = gql`query PassageInfo($id: ID!){
  passageDetail(id: $id){
        info{
        id,
        createDate,
        updateDate,
        name,
        tags{
          name,
          color,
          type
        },
        content,
        desc,
        type,
        images,
        mainImage,
        catalog{
          id,
          name
        },
        docType,
        origin,
        originAddr,
      }
  }
}`;