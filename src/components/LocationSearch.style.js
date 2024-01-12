import styled from "styled-components";
export const SearchContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
export const ResultItem = styled.div`
  border: 0.5px solid white;
  width: 100%;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;
