import styled from "styled-components";
const Wrapper = styled.div`
  margin-top: 16px;
  width: 100%;

  .history-table {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        padding: 10px 0 10px 0;
        border-bottom: 1px solid #eee;
      }
    }
    &-box {
      display: flex;
      flex-direction: row;
    }
    .product-info {
      display: flex;
      align-items: center;
      gap: 1ch;
    }
  }
`;

export default Wrapper;
