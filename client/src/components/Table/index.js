import React from "react";
import Wrapper from "./Wrapper";
import SquareTable from "./SquareTable";
import CircleTable from "./EllipseTable";
import Outside from "./Outside";
import OutsideWrapper from "./OutsideWrapper";

function Table() {
  return (
    <Wrapper>
      <SquareTable order={1}>
        <span className="table-name">T2</span>
        <div className="chair"></div>
        <div className="chair"></div>
        <div className="chair"></div>
        <div className="chair"></div>
      </SquareTable>
      <OutsideWrapper>
        <Outside />
        <Outside />
      </OutsideWrapper>
      <CircleTable order={1}>
        <span className="table-name">T2</span>
        <div className="chair"></div>
        <div className="chair"></div>
        <div className="chair"></div>
        <div className="chair"></div>
      </CircleTable>
      <OutsideWrapper>
        <Outside />
        <Outside />
      </OutsideWrapper>
    </Wrapper>
  );
}

export default Table;
