import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Button({ classe, name, id, setisAvailable, setChair }) {
  const [select, setSelect] = useState(false);

  useEffect(() => {
    if (!select) {
      setisAvailable((element) => {
        return element.filter((e) => e !== Number(id));
      });

      setChair((a) => {
        return a.filter((b) => b !== Number(name));
      });
    } else {
      setisAvailable((element) => [...element, Number(id)]);
      setChair((a) => [...a, Number(name)]);
    }
  }, [select]);
  return (
    <Btn
      className={`${classe}`}
      key={id}
      onClick={() => {
        setSelect(!select);
      }}
      select={select}
      disabled={!classe}
    >
      {name}
    </Btn>
  );
}

const Btn = styled.button`
  background: ${({ select }) => (select ? "#8DD7CF" : "#C3CFD9")};
  border: 1px solid ${({ select }) => (select ? "#45BDB0" : "#808F9D")};
`;
