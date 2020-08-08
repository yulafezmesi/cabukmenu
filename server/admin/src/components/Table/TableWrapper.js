import React, { useState } from "react";
import Table from "./Table";
import OutsideWrapper from "./OutsideWrapper";
import Outside from "./Outside";
import TableDetails from "./TableDetails/index";
import TableHistory from "./TableHistory/index";
import PropTypes from "prop-types";
import { HistoryOutlined } from "@material-ui/icons";
import { CSSTransition } from "react-transition-group";

function TableWrapper({ table }) {
  const [showDetail, setShowDetail] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  return (
    <>
      <div style={{ display: "flex" }}>
        <Table
          onClick={() => setShowDetail(!showDetail)}
          tableType={table.type}
          order={
            table.order_headers.length <= 4 ? table.order_headers.length : 4
          }
        >
          <span className="table-name">{table.name}</span>
          <div className="chair"></div>
          <div className="chair"></div>
          <div className="chair"></div>
          <div className="chair"></div>

          <HistoryOutlined
            className="table-history"
            onClick={(e) => {
              e.stopPropagation();
              setShowHistory(!showHistory);
            }}
          />
          <CSSTransition
            timeout={300}
            in={showHistory}
            classNames="history"
            unmountOnExit
          >
            <TableHistory />
          </CSSTransition>
        </Table>
        <OutsideWrapper>
          {[
            ...Array(
              table.order_headers.length > 4
                ? table.order_headers.length - 4
                : 0
            ),
          ].map(() => (
            <Outside tableType={table.type} />
          ))}
        </OutsideWrapper>
      </div>
      {showDetail ? (
        <TableDetails
          showDetail={showDetail}
          setShowDetail={setShowDetail}
          table={table}
        />
      ) : null}
    </>
  );
}

TableWrapper.propTypes = {
  table: PropTypes.object,
};

export default TableWrapper;
