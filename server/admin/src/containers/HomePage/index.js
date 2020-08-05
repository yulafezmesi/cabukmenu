import React, { memo, useEffect } from "react";
import { Block, Container } from "./components";
import Table from "../../components/Table/index";
import { gql, useQuery } from "@apollo/client";

import io from "socket.io-client";

const socket = io("http://localhost:1337");

const GET_SECTIONS = gql`
  query {
    sections {
      id
      name
      tables(where: { is_available: true }) {
        id
        name
        type
        order_headers(
          where: { order_items: { order_status: { is_show: true } } }
        ) {
          id
          created_at
          unit_price
          user {
            username
          }
          currency {
            symbol
          }
          note
          order_items(where: { order_status: { is_show: true } }) {
            id
            product_t {
              name
              product {
                image {
                  url
                }
              }
            }
            quantity
            base_price
            total_price
            currency {
              symbol
            }
            order_status {
              id
              name
              is_show
            }
          }
        }
      }
    }
  }
`;

const HomePage = ({ global: { plugins }, history: { push } }) => {
  useEffect(() => {
    socket.on("change_order", (data) => {
      refetch();
    });
  }, []);
  const { loading, error, data, refetch } = useQuery(GET_SECTIONS);
  if (loading) return <p>Yükleniyor..</p>;
  if (error) return <p>hata</p>;
  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Table sections={data.sections}></Table>
            <button onClick={() => refetch()}>Fetchle beni bebek</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
