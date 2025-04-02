import styled from "styled-components";

export const GridContainer = styled.div`
  border-radius: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-gap: 20px;
  padding: 75px 25px;
  background-color: lightgray;
  justify-content: space-evenly;
`;

export const GridItem = styled.div`
  top: -100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 150px;
  width: 100px;
  box-shadow: #878787 0px 5px 5px 0px;
`;

export const Card = styled.div`
  display: flex;
  border-radius: 30px;
  color: #878787;
  height: 80%;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 3vh;
  background-color: lightgray;

  &:hover {
    background-color: #ebf5f3;
    cursor: pointer;
    color: #b7e9de;
  }
`;

export const ClickedCard = styled(Card)`
  cursor: pointer;
  color: #b7e9de;
  font-size: 3rem;
  background-color: white;
  justify-content: center;

  &:hover {
    background-color: white;
    cursor: pointer;
  }
`;