import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #efefef;
`;

export const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  position: relative;
  padding: 50px;
`;

export const Select = styled.select`
  padding: 3px;
  border: none;
  width: 160px;
  height: 40px;
  outline: 0;
  border-radius: 10px;
  background-color: #fff;
`;

export const ContainerGame = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50px;
`;

export const ContaineTypeGame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    color: white;
    text-transform: uppercase;
    margin: 20px;
    font-size: 30px;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  width: 100%;
`;

export const ContainerBalls = styled.div`
  display: flex;
  height: 600px;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    flex-wrap: wrap;
    max-height: 300px;
    min-height: 300px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      margin: 5px;
      font-size: 27px;
    }
  }
`;

export const ContainerConcurso = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
    color: #ffffff;
  }
  h3 {
    font-size: 20px;
    color: #ffffff;
  }
`;