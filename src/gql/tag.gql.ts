import gql from "graphql-tag";

export const tagListData = gql`
    {
    tagList{
    total,
    tagList{
      id,
      createDate,
      updateDate,
      name,
      color,
      type
    }
  }
}
`;