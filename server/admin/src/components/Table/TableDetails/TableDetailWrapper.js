import styled from "styled-components";
const TableDetailWrapper = styled.div`
  display: flex;
  width: 35%;
  background-color: white;
  z-index: 99999999;
  flex-wrap: wrap;
  padding: 16px 24px;
  box-shadow: ${({ theme }) => theme.table.boxShadow};
  border-radius: 5px;
  font-size: 1.5rem;
  margin-left: 240px;
  .table-detail {
    flex: 0;
    align-self: center;
  }
  .panel {
    flex: 1;
    margin-left: 24px;
    max-height: 250px;
    overflow-y: auto;
    box-shadow: 0 6px 4px -4px rgba(60, 64, 67, 0.3);
    ::-webkit-scrollbar {
      width: 3px;
    }
  }
  .amount {
    text-align: right;
    white-space: nowrap;
    line-height: 1;
  }
  details {
    background: #fff;
    display: flex;
    :not(:last-child) {
      margin-bottom: 8px;
    }
  }

  details div.content {
    padding: 8px 8px 0 8px;
    ul {
      display: flex;
      flex-direction: column;
    }
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      :not(:last-child) {
        margin-bottom: 8px;
      }
    }
    table {
      width: 100%;
      td {
        padding: 0.5rem;
      }
    }
    .product {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 175px;
    }
  }

  details[open] {
    margin-bottom: 16px;
    border: none;
    border-radius: 2px;
    .title-name {
      font-weight: 500;
    }

    /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24); */
  }
  details[open] summary {
    &:before {
      content: "";
      height: 100%;
      width: 2px;
      background-color: ${(props) =>
        props.theme.table[props.tableType].primary};
      position: absolute;
      left: 0;
    }
  }
  details summary {
    display: flex;
    align-items: center;
    &:before {
      content: "";
      height: 65%;
      width: 2px;
      background-color: ${(props) =>
        props.theme.table[props.tableType].primary};
      position: absolute;
      left: 0;
      transition: 0.2s ease-in-out;
      opacity: 0.8;
    }
  }
  details[open]:first-child {
    margin-top: 0 !important;
    margin-bottom: 16px;
    border: none;
  }
  details[open]:last-child {
    margin-top: 16px;
    margin-bottom: 0px;
    border: none;
  }

  summary {
    outline: none;
    cursor: pointer;
    padding: 0 8px 0 8px;
    color: #212121;
    position: relative;
  }
  summary:hover {
    background: #eeeeee;
  }

  details[open] summary:hover {
    background: none;
  }
  details ul,
  summary ul {
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

  summary ul li {
    flex: 1 1;
    flex-flow: row wrap;
  }
  summary ul li span {
    display: block;
    font-size: 12px;
    margin-top: 6px;
    opacity: 0.75;
  }
  summary::-webkit-details-marker {
    display: none;
  }

  .title-name {
    flex-grow: 4;
    text-transform: capitalize;
    line-height: 1;
    letter-spacing: 0.5px;
  }

  .list-unstyled {
    margin-top: 15px;
    padding-left: 0;
    list-style: none;
  }
  .list-unstyled li {
    margin-bottom: 6px;
  }
  .avatar {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    overflow: hidden;
    position: relative;
    align-items: center;
    flex-shrink: 0;
    line-height: 1;
    user-select: none;
    border-radius: 50%;
    justify-content: center;
    margin-right: 8px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      text-align: center;
    }
  }
`;

export default TableDetailWrapper;
