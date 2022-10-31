import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  min-width: 200px;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.5s;

  .rotate-180 {
    transform: rotate(180deg);
    margin-top: 5px;
  }

  .margin {
    margin-top: 5px;
  }

  :hover {
    transform: scale(1.2);
  }
`;
