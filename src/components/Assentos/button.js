import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Button({ classe, name, id, setisAvailable }) {
  const [select, setSelect] = useState(false);

  useEffect(() => {
    if (!select) {
      setisAvailable((element) => {
        return element.filter((e) => e !== Number(id));
      });
    } else {
      setisAvailable((element) => [...element, Number(id)]);
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
