import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
  padding: 30px 50px 50px 50px;
  padding-left: 5vh;
  padding-right: 5vh;
`;

export const AppHeader = styled.header`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: red;
  padding: 5vh;
  justify-content: space-between;

  @media (max-width: 860px) {
    padding: 5vh 0;
  }
`;

export const AppTitle = styled.div`
  display: flex;
  width: 60%;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 860px) {
    width: 70%;
  }

  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    grid-gap: 25px;
  }
`;

export const AppLogo = styled.img`
  height: 119px;
  display: flex;
  pointer-events: none;
  justify-content: left;

  @media (max-width: 480px) {
    align-self: flex-start;
  }
`;

export const AppControls = styled.div`
  width: 40%;
  display: flex;
  justify-content: end;

  @media (max-width: 640px) {
    position: fixed;
    top: 50px;
    right: 70px;
  }

  @media (max-width: 480px) {
    top: 70px;
  }
`;

export const AppSettings = styled.div`
  border-right: 2px solid #878787;
  padding-right: 10px;
  color: #878787;
`;

export const AppReset = styled.div`
  padding-left: 10px;
  color: #878787;
`;

export const GridContainer = styled.div`
  border-radius: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-gap: 20px;
  padding: 75px 25px;
  background-color: lightgray;
  justify-content: space-evenly;
`;