import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Assentos() {
  const { idSessao } = useParams();
  const [seat, setSeat] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
      )
      .then((resposta) => {
        setSeat(resposta.data);
      });
  }, []);
  return (
    <Main>
      <h1>Selecione o(s) assento(s)</h1>
      <ul>
        <li></li>
      </ul>
      <div className="subtitle">
        <button className="selecionado">Selecionado</button>
        <button className="disponível">Disponível</button>
        <button className="indisponível">Indisponível</button>
      </div>

      <div className="inputs">
        <p>Nome do comprador:</p>
        <input placeholder="Digite seu nome..." />
        <p>CPF do comprador:</p>
        <input placeholder="Digite seu CPF..." />
      </div>
    </Main>
  );
}

const Main = styled.main`
  h1 {
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 2.8rem;

    color: #293845;
  }

  .selecionado {
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;

    background: #8dd7cf;
    border: 0.1rem solid #1aae9e;
    border-radius: 1.7rem;
  }
`;
