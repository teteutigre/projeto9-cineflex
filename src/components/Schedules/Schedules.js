import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Schedules() {
  const { idFilme } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`
      )
      .then((resposta) => {
        setMovie(resposta.data);
      });
  }, []);

  return (
    <>
      <Main>
        <div className="titulo">
          {" "}
          <h1>Selecione o horário</h1>
        </div>

        <ul>
          {movie.days?.map((element) => {
            return (
              <li>
                <p>
                  {element.weekday} - {element.date}
                </p>
                <div>
                  {element.showtimes.map((e) => {
                    return (
                      <Link to={`/assentos/${e.id}`}>
                        <button>{e.name}</button>
                      </Link>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </Main>
      <Footer>
        <div>
          <img src={movie.posterURL} />
        </div>
        <h1>{movie.title}</h1>
      </Footer>
    </>
  );
}

const Main = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 14rem;

  display: flex;

  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    gap: 4rem;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 3.2rem;
  }

  div {
    display: flex;
    gap: 0.8rem;
  }

  button {
    width: 8.3rem;
    height: 4.3rem;

    background: #e8833a;
    border-radius: 0.3rem;

    border: none;

    font-weight: 400;
    font-size: 1.8rem;

    color: #ffffff;
  }

  h1 {
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 2.4rem;

    margin: 10.7rem 0 4.7rem 0;

    color: #293845;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;

    color: #293845;
  }

  .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = styled.footer`
  border-top: 0.1rem solid #9eadba;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 11.7rem;
  width: 100%;
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
`;
