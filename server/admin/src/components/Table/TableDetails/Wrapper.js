import styled from "styled-components";
const Wrapper = styled.div`
  align-items: center;
  border-radius: inherit;
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding-top: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), z-index 1ms;
  z-index: 99999999;
`;

export default Wrapper;
