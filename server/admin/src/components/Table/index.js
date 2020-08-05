import React from "react";
import Wrapper from "./Wrapper";
import PropTypes from "prop-types";
import SectionWrapper from "./SectionWrapper";
import TableWrapper from "./TableWrapper";
function Table({ sections }) {
  return (
    <Wrapper>
      {sections.map((section) => {
        return (
          <SectionWrapper key={section.id} sectionName={section.name}>
            {section.tables.map((table) => (
              <TableWrapper key={table.id} table={table} />
            ))}
          </SectionWrapper>
        );
      })}
    </Wrapper>
  );
}

Table.propTypes = {
  sections: PropTypes.array,
};
export default Table;
