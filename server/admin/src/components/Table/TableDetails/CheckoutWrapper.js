import styled from "styled-components";
const Checkout = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .checkout {
    flex: 0 0 calc(100% - 133px);
    margin-top: 8px;
    margin-right: 10px;
    ul {
      list-style: none;
      display: -webkit-flex;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-block-start: 0;
      margin-block-end: 0;
      padding: 0;
      padding-right: 0.5rem;
      width: 100%;
    }
  }
  .total-amount {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }
`;

export default Checkout;
