import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Movies() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v7/cineflex/movies")
      .then((resposta) => {
        setMovie(resposta.data);
      });
  }, []);
  return (
    <Main>
      <h1>Selecione o filme</h1>
      <ul>
        {movie.map((element) => {
          return (
            <li>
              <Link to={`/filme/${element.id}`}>
                <img src={element.posterURL} />
              </Link>
            </li>
          );
        })}
      </ul>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 2.4rem;

    margin: 10.7rem 0 4.7rem 0;

    color: #293845;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.9rem;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14.5rem;
    height: 20.9rem;

    background: #ffffff;
    box-shadow: 0rem 0.2rem 0.4rem 0.2rem rgba(0, 0, 0, 0.1);
    border-radius: 0.3rem;
  }

  img {
    width: 12.9rem;
    height: 19.3rem;
  }
`;
