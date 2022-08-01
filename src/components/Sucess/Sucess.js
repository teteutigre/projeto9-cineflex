import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Sucess() {
  const { state } = useLocation();
  return (
    <Main>
      <h1>
        Pedido feito <br /> com sucesso!
      </h1>
      <div className="info">
        <div>
          <h2>Filme e sessão</h2>
          <p>{state.filme}</p>
          <p>
            {state.dia} {state.hora}
          </p>
        </div>

        <div>
          <h2>Ingressos</h2>
          {state.ingressos.map((element) => {
            return <p>{`Assento ${element}`}</p>;
          })}
        </div>

        <div>
          <h2>Comprador</h2>
          <p>{`Nome: ${state.name}`}</p>
          <p>{`CPF: ${state.cpf}`}</p>
        </div>
      </div>

      <Link to="/">
        <button>Voltar pra Home</button>
      </Link>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;
    text-align: center;

    letter-spacing: 0.04em;

    color: #247a6b;

    margin: 10.7rem 0 4.7rem 0;
  }

  .info {
    display: flex;
    flex-direction: column;

    gap: 4rem;
    width: 85%;

    h2 {
      font-weight: 700;
      font-size: 2.4rem;

      color: #293845;
    }

    p {
      font-weight: 400;
      font-size: 2.2rem;

      color: #293845;
    }
  }

  button {
    border: none;
    margin-top: 6.2rem;

    width: 22.5rem;
    height: 4.2rem;

    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;

    color: #ffffff;
    background: #e8833a;

    border-radius: 0.3rem;
  }
`;
