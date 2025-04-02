import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Popup = styled.div`
  background: white;
  border-radius: 30px;
  text-align: center;
  width: 270px;
  font-weight: bolder;
  padding: 15px;
`;

export const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  font-size: 25px;
  margin: 5px;
`;

export const TitleText = styled.p`
  justify-self: start;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  justify-self: end;
`;

export const Setting = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  margin-bottom: 15px;
`;

export const SettingLabel = styled.p`
  width: 80%;
`;

export const SettingInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 20%;
  font-size: 16px;
`;

export const SaveButton = styled.button`
  background: #ff4d64;
  color: white;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  height: 45px;

  &:hover {
    background: #e0435b;
  }
`;