import React, { memo } from "react";
import { Block, Container } from "./components";
import Table from "../../components/Table/index";
const HomePage = ({ global: { plugins }, history: { push } }) => {
  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Table></Table>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
