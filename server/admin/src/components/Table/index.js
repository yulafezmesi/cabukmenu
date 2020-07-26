import React from "react";
import Wrapper from "./Wrapper";
import SectionWrapper from "./SectionWrapper";
import TableWrapper from "./TableWrapper";
function Table() {
  return (
    <Wrapper>
      <SectionWrapper sectionName="Bahçe">
        <TableWrapper tableType="ellipse" />
        <TableWrapper tableType="square" />
        <TableWrapper tableType="ellipse" />
        <TableWrapper tableType="ellipse" />
      </SectionWrapper>
      <SectionWrapper sectionName="Teras">
        <TableWrapper tableType="ellipse" />
        <TableWrapper tableType="square" />
        <TableWrapper tableType="square" />
        <TableWrapper tableType="ellipse" />
      </SectionWrapper>
      <SectionWrapper sectionName="Lobi">
        <TableWrapper tableType="ellipse" />
        <TableWrapper tableType="ellipse" />
        <TableWrapper tableType="square" />
        <TableWrapper tableType="ellipse" />
      </SectionWrapper>
    </Wrapper>
  );
}

export default Table;
