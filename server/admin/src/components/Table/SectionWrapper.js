import styled from "styled-components";
const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  gap: 15px;
  grid-row-gap: 30px;
  border: 1px solid #dadada;
  padding: 15px;
  position: relative;
  &:after {
    display:block;
    content: "${(props) => props.sectionName}";
    position: absolute;
    top: 50%;
    writing-mode: vertical-rl;
    color: ${(props) => props.theme.table.empty.primary};
    font-size: 25px;
    opacity:85%;
    letter-spacing: 2px;
    right:12px;
    text-align:center;
    transform: scale(-1) translate(-50%, 50%);

  text-transform: uppercase;
  }
`;

export default SectionWrapper;
