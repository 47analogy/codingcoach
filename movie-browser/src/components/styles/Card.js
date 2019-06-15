import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  width: 30%;
  height: 100px;
  margin: 20px 5px;
  height: 150px;
`;

export const CardBody = styled.div`
  border: 1px solid black;
  width: 200px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #ff90001c;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  height: 25px;
  font-size: 15px;
  text-align: center;
  padding-bottom: 5px;
  margin: 5px;
`;

export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 7px 0;
`;
