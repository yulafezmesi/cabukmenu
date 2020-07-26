import styled from "styled-components";
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.table[props.tableType].primary};
  width: 34px;
  height: 6px;
  margin-left: 15px;
  margin-bottom: 8px;
  border-radius: 5px;
`;

export default Wrapper;
