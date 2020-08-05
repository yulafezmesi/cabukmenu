import styled from "styled-components";

const Wrapper = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) =>
    props.order > 0
      ? props.theme.ellipse.secondary
      : props.theme.empty.secondary};
  position: relative;
  border-radius: 50%;
  .table-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: ${(props) =>
      props.order > 0
        ? props.theme.ellipse.primary
        : props.theme.empty.primary};
    font-size: 40px;
  }

  .chair {
    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
      0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
  }

  .outside-chairs {
    width: 100px;
    height: 100px;
    background-color: red;
  }
  ${({ order, theme }) => {
    let styles = "";
    switch (order) {
      case 0:
        styles = `
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
    }`;
        break;
      case 1:
        styles = `
      .chair:nth-of-type(1) {
        background-color: #007eff;
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
      }`;
        break;
      case 2:
        styles = `
      .chair:nth-of-type(1) {
        background-color: #007eff;
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
        background-color: #007eff;
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
      }`;
        break;
      case 3:
        styles = `
        .chair:nth-of-type(1) {
          background-color: #007eff;
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
          background-color: #007eff;
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
          background-color: #007eff;
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
        }`;
        break;
      case 4:
        styles = `
      .chair:nth-of-type(1) {
        background-color: #007eff;
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
        background-color: #007eff;
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
        background-color: #007eff;
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
        background-color: #007eff;
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
      }`;
        break;
    }
    return styles;
  }}
`;

export default Wrapper;
