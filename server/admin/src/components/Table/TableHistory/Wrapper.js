import styled from "styled-components";
const Wrapper = styled.div`
  display: grid;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.main.colors.lightGrey};
  box-shadow: ${({ theme }) => theme.table.boxShadow};
  position: absolute;
  bottom: -101px;
  z-index: 2;
`;

export default Wrapper;
