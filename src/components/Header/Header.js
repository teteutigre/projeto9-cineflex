import styled from "styled-components";
export default function Top() {
  return (
    <Header>
      <h1>CINEFLEX</h1>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  height: 6.7rem;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  top: 0 auto;
  left: 0 auto;

  background: #c3cfd9;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 3.4rem;

    color: #e8833a;
  }
`;
