import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;

  /* background-color: blue; */

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 2rem 0;
    box-sizing: border-box;
  }

  header h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 2rem 0;
  }
`;

export default Container;
