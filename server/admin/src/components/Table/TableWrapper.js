import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "./Table";
import OutsideWrapper from "./OutsideWrapper";
import Outside from "./Outside";
import TableDetails from "./TableDetails/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
function TableWrapper({ table }) {
  const [showDetail, setShowDetail] = useState(false);
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
          <Link to={`/generate-qr/${table.qr}`}>
            <FontAwesomeIcon className="table-hover-icon" icon={faQrcode} />
          </Link>
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
