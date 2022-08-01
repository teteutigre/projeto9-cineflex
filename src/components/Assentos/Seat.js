import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./button";
import { useNavigate } from "react-router-dom";

function submit(name, cpf, filme, dia, hora, ingressos, reserve, navigate) {
  console.log(filme);
  if (name !== "" && cpf !== "" && cpf.length <= 11) {
    axios
      .post(
        "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
        reserve
      )
      .then(() => {
        navigate("/sucesso", {
          state: { name, cpf, filme, dia, hora, ingressos },
        });
      });
  } else {
    alert("CPF deve conter 11 números");
  }
}

export default function Seat() {
  const { idSessao } = useParams();
  const [seat, setSeat] = useState([]);
  const [isAvailable, setisAvailable] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const reserve = { ids: isAvailable, name: name, cpf: cpf };

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
      )
      .then((resposta) => {
        setSeat(resposta.data);
      });
  }, []);

  const filme = seat.movie?.title;
  const dia = seat.day?.date;
  const hora = seat?.name;
  const ingressos = isAvailable;

  return (
    <>
      <Main>
        <h1>Selecione o(s) assento(s)</h1>
        <ul>
          {seat.seats &&
            seat.seats.map((element) => {
              return (
                <Button
                  classe={element.isAvailable}
                  key={element.id}
                  name={element.name}
                  id={element.id}
                  setisAvailable={setisAvailable}
                />
              );
            })}
        </ul>
        <div className="subtitle">
          <div>
            <button className="selecionado"></button>
            <p>Selecionado</p>
          </div>

          <div>
            <button className="disponivel"></button>
            <p>Disponível</p>
          </div>

          <div>
            <button className="indisponivel"></button>
            <p>Indisponível</p>
          </div>
        </div>

        <form
          onSubmit={(element) => {
            element.preventDefault();
            submit(name, cpf, filme, dia, hora, ingressos, reserve, navigate);
          }}
          className="inputs"
        >
          <div>
            {" "}
            <p>Nome do comprador:</p>
            <input
              required
              type="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome..."
            />
          </div>
          <div>
            <p>CPF do comprador:</p>
            <input
              required
              type="cpf"
              onChange={(e) => setCpf(e.target.value)}
              placeholder="Digite seu CPF..."
            />
          </div>

          <button type="submit" className="finalizar">
            Reservar assento(s)
          </button>
        </form>
      </Main>
      <Footer>
        <div>
          <img src={seat.movie?.posterURL} />
        </div>

        <div className="info">
          <h1>
            {seat.movie?.title} <br /> {seat.day?.weekday} - {seat?.name}
          </h1>
        </div>
      </Footer>
    </>
  );
}

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 14rem;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 1rem;

    width: 85%;

    margin-bottom: 1.6rem;
  }

  ul > button {
    width: 2.6rem;
    height: 2.6rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
  }

  .false {
    background-color: #fbe192;
    border: 0.1rem solid #f7c52b;
  }

  h1 {
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 2.8rem;

    margin: 10.7rem 0 4.7rem 0;

    color: #293845;
  }

  .inputs {
    margin: 4.2rem 2.4rem 5.7rem 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
    width: 85%;
  }

  .inputs button {
    margin-top: 5.7rem;
  }
  .inputs > div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  input::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    font-size: 1.8rem;

    padding-left: 1.8rem;

    color: #afafaf;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;

    color: #293845;
  }

  input {
    width: 32.7rem;
    height: 5.1rem;
    font-weight: 400;
    font-size: 1.8rem;

    display: flex;

    background: #ffffff;
    border: 0.1rem solid #d5d5d5;
    border-radius: 0.3rem;
  }

  .subtitle {
    display: flex;
    width: 80%;
    justify-content: space-around;
    margin: 0 8rem 0 8rem;
  }

  .subtitle div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .subtitle p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;

    color: #4e5a65;
  }

  .selecionado {
    width: 2.5rem;
    height: 2.5rem;

    background: #8dd7cf;
    border: 0.1rem solid #1aae9e;
    border-radius: 50%;
  }

  .disponivel {
    width: 2.5rem;
    height: 2.5rem;

    background: #c3cfd9;
    border: 0.1rem solid #7b8b99;
    border-radius: 50%;
  }

  .indisponivel {
    width: 2.5rem;
    height: 2.5rem;

    background: #fbe192;
    border: 0.1rem solid #f7c52b;
    border-radius: 50%;
  }

  .finalizar {
    width: 22.5rem;
    height: 4.2rem;

    background: #e8833a;
    border-radius: 0.3rem;

    font-weight: 400;
    font-size: 1.8rem;

    color: #ffffff;

    border: none;
  }
`;

const Footer = styled.footer`
  border-top: 0.1rem solid #9eadba;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 11.7rem;
  background-color: #dfe6ed;
  bottom: 0;
  left: 0;
  padding-left: 1rem;
  gap: 1.4rem;
  h1 {
    font-weight: 400;
    font-size: 2.6rem;

    color: #293845;
  }

  div {
    width: 6.4rem;
    height: 8.9rem;

    background: #ffffff;
    box-shadow: 0, 0rem 0, 2rem 0, 4rem rgba(0, 0, 0, 0.1);
    border-radius: 0, 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 4.8rem;
    height: 7.2rem;
  }

  .info {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #dfe6ed;
    justify-content: flex-start;
  }
`;
