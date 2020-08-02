import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: ${({ theme }) => theme.table.boxShadow};
  background-color: ${(props) =>
    props.order > 0
      ? props.theme.table[props.tableType].secondary
      : props.theme.table.empty.secondary};
  position: relative;
  user-select: none;
  border-radius: ${({ tableType }) =>
    tableType === "ellipse" ? "50%" : "inherit"};
  .table-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: ${(props) =>
      props.order > 0
        ? props.theme.table[props.tableType].primary
        : props.theme.table.empty.primary};
    font-size: 30px;
  }

  .outside-chairs {
    width: 100px;
    height: 100px;
  }
  ${({ order }) => {
    let styles = "";
    switch (order) {
      case 0:
        styles = css`
          .chair:nth-of-type(1) {
            background-color: #959bb6;
            width: 50px;
            height: 10px;
            position: absolute;
            top: -6px;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            z-index: -1;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
          .chair:nth-of-type(2) {
            background-color: #959bb6;
            width: 10px;
            height: 50px;
            position: absolute;
            left: -6px;
            margin-top: auto;
            margin-bottom: auto;
            top: 0;
            bottom: 0;
            z-index: -1;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          .chair:nth-of-type(3) {
            background-color: #959bb6;
            width: 50px;
            height: 10px;
            position: absolute;
            bottom: -6px;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            z-index: -1;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          .chair:nth-of-type(4) {
            background-color: #959bb6;
            width: 10px;
            height: 50px;
            position: absolute;
            right: -6px;
            margin-top: auto;
            margin-bottom: auto;
            top: 0;
            bottom: 0;
            z-index: -1;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        `;
        break;
      case 1:
        styles = css`
          .chair:nth-of-type(1) {
            background-color: ${(props) =>
              props.theme.table[props.tableType].primary};
            width: 50px;
            height: 10px;
            position: absolute;
            top: -6px;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            z-index: -1;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
          .chair:nth-of-type(2) {
            background-color: ${(props) => props.theme.table.empty.primary};
            width: 10px;
            height: 50px;
            position: absolute;
            left: -6px;
            margin-top: auto;
            margin-bottom: auto;
            top: 0;
            bottom: 0;
            z-index: -1;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          .chair:nth-of-type(3) {
            background-color: ${(props) => props.theme.table.empty.primary};
            width: 50px;
            height: 10px;
            position: absolute;
            bottom: -6px;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            z-index: -1;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          .chair:nth-of-type(4) {
            background-color: ${(props) => props.theme.table.empty.primary};
            width: 10px;
            height: 50px;
            position: absolute;
            right: -6px;
            margin-top: auto;
            margin-bottom: auto;
            top: 0;
            bottom: 0;
            z-index: -1;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        `;
        break;
      case 2:
        styles = css`
          .chair:nth-of-type(1) {
            background-color: ${(props) =>
              props.theme.table[props.tableType].primary};
            width: 50px;
            height: 10px;
            position: absolute;
            top: -6px;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            z-index: -1;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
          .chair:nth-of-type(2) {
            background-color: ${(props) =>
              props.theme.table[props.tableType].primary};
            width: 10px;
            height: 50px;
            position: absolute;
            left: -6px;
            margin-top: auto;
            margin-bottom: auto;
            top: 0;
            bottom: 0;
            z-index: -1;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          .chair:nth-of-type(3) {
            background-color: ${(props) => props.theme.table.empty.primary};
            width: 50px;
            height: 10px;
            position: absolute;
            bottom: -6px;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            z-index: -1;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          .chair:nth-of-type(4) {
            background-color: ${(props) => props.theme.table.empty.primary};
            width: 10px;
            height: 50px;
            position: absolute;
            right: -6px;
            margin-top: auto;
            margin-bottom: auto;
            top: 0;
            bottom: 0;
            z-index: -1;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        `;
        break;
      case 3:
        styles = css`
          .chair:nth-of-type(1) {
            background-color: ${(props) =>
              props.theme.table[props.tableType].primary};
            width: 50px;
            height: 10px;
            position: absolute;
            top: -6px;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            z-index: -1;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
          .chair:nth-of-type(2) {
            background-color: ${(props) =>
              props.theme.table[props.tableType].primary};
            width: 10px;
            height: 50px;
            position: absolute;
            left: -6px;
            margin-top: auto;
            margin-bottom: auto;
            top: 0;
            bottom: 0;
            z-index: -1;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          .chair:nth-of-type(3) {
            background-color: ${(props) =>
              props.theme.table[props.tableType].primary};
            width: 50px;
            height: 10px;
            position: absolute;
            bottom: -6px;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            z-index: -1;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          .chair:nth-of-type(4) {
            background-color: ${(props) => props.theme.table.empty.primary};
            width: 10px;
            height: 50px;
            position: absolute;
            right: -6px;
            margin-top: auto;
            margin-bottom: auto;
            top: 0;
            bottom: 0;
            z-index: -1;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        `;
        break;
      case 4:
        styles = css`
          .chair:nth-of-type(1) {
            background-color: ${(props) =>
              props.theme.table[props.tableType].primary};
            width: 50px;
            height: 10px;
            position: absolute;
            top: -6px;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            z-index: -1;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
          .chair:nth-of-type(2) {
            background-color: ${(props) =>
              props.theme.table[props.tableType].primary};
            width: 10px;
            height: 50px;
            position: absolute;
            left: -6px;
            margin-top: auto;
            margin-bottom: auto;
            top: 0;
            bottom: 0;
            z-index: -1;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          .chair:nth-of-type(3) {
            background-color: ${(props) =>
              props.theme.table[props.tableType].primary};
            width: 50px;
            height: 10px;
            position: absolute;
            bottom: -6px;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            z-index: -1;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          .chair:nth-of-type(4) {
            background-color: ${(props) =>
              props.theme.table[props.tableType].primary};
            width: 10px;
            height: 50px;
            position: absolute;
            right: -6px;
            margin-top: auto;
            margin-bottom: auto;
            top: 0;
            bottom: 0;
            z-index: -1;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        `;
        break;
    }
    return styles;
  }}
`;

export default Wrapper;
