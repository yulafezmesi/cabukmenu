import React from "react";
import Table from "./Table";
import OutsideWrapper from "./OutsideWrapper";
import Outside from "./Outside";
function TableWrapper({ tableType }) {
  return (
    <div style={{ display: "flex" }}>
      <Table tableType={tableType} order={4}>
        <span className="table-name">T2</span>
        <div className="chair"></div>
        <div className="chair"></div>
        <div className="chair"></div>
        <div className="chair"></div>
      </Table>
      <OutsideWrapper>
        <Outside tableType={tableType} />
        <Outside tableType={tableType} />
        <Outside tableType={tableType} />
      </OutsideWrapper>
    </div>
  );
}

export default TableWrapper;
