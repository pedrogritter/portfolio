import { down } from "styled-breakpoints";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
  justify-content: space-between;
  padding: 2rem;

  ${down("lg")} {
    flex-direction: column;
  }
`;
const CategoryTitle = styled.div`
  font-size: 48px;

  text-decoration: underline solid rgb(35, 229, 219) 2px;

  ${down("lg")} {
    font-size: 28px;
    text-align: center;
  }
`;

const Title = styled.div`
  font-size: 40px;

  inline-size: 35rem;
  overflow-wrap: break-word;

  ${down("lg")} {
    font-size: 20px;
    /* text-align: center; */
  }
`;

const Content = styled.div`
  padding-bottom: 2rem;
`;

const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface DetailProps {
  category: string;
  items: {
    name: string;
    description: string;
    specialization?: string;
    year?: number;
  }[];
}

const Detail = (props: DetailProps) => {
  const Entries =
    props.items &&
    props.items.map((item, key) => (
      <>
        <Title>{item.name}</Title>
        <Content>{item.description}</Content>
      </>
    ));

  return (
    <DetailContainer>
      <CategoryTitle>{props.category}</CategoryTitle>
      <EntryContainer>{Entries}</EntryContainer>
    </DetailContainer>
  );
};

export default Detail;
