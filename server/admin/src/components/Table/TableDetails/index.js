import React, { useContext } from "react";
import { useIntl } from "react-intl";
import Wrapper from "./Wrapper";
import Table from "../Table";
import TableDetailWrapper from "./TableDetailWrapper";
import OutsideWrapper from "../OutsideWrapper";
import CheckoutWrapper from "../TableDetails/CheckoutWrapper";
import BlankTableWrapper from "../TableDetails/BlankTableWrapper";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { EventNoteOutlined } from "@material-ui/icons";
import { MainContext } from "../../../context/MainContext";
import "./animation.css";
import Overlay from "./Overlay";
function TableDetails({ table, setShowDetail, showDetail }) {
  const { formatMessage } = useIntl();
  const { updateOrdersToPaymentComplete } = useContext(MainContext);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setShowDetail(false);
  });
  const userOrders = table.order_headers.reduce(function (r, a) {
    r[a.user.username] = r[a.user.username] || [];
    r[a.user.username].push(a);
    return r;
  }, Object.create(null));

  const getAllOrderItemsByUser = (headers) => {
    console.log(headers);
    return headers.reduce((sum, item) => {
      return [...sum, ...item.order_items];
    }, []);
  };

  const getAllOrderItems = () => {
    return table.order_headers.reduce((sum, item) => {
      return [...sum, ...item.order_items];
    }, []);
  };
  return (
    <Wrapper>
      <Overlay onClick={() => setShowDetail(false)} />
      <CSSTransition timeout={1000} in={showDetail} classNames="alert" appear>
        <TableDetailWrapper tableType={table.type}>
          <div className="table-detail">
            <Table
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
          {Object.keys(userOrders).length > 0 ? (
            <>
              <div class="panel">
                {Object.keys(userOrders).map((user, i) => {
                  return (
                    <details key={i} open>
                      <summary>
                        <ul>
                          <li class="title-name">{user}</li>
                          <EventNoteOutlined
                            onClick={() =>
                              updateOrdersToPaymentComplete(
                                getAllOrderItemsByUser(userOrders[user])
                              )
                            }
                            style={{ fontSize: "1.8rem", color: "#6dbb1a" }}
                          />
                          <li class="amount">
                            {getAllOrderItemsByUser(userOrders[user]).reduce(
                              (sum, val, i, arr) => {
                                if (i === arr.length - 1) {
                                  sum += val.total_price;
                                  return `${sum} ${val.currency.symbol}`;
                                }
                                return (sum += val.total_price);
                              },
                              0
                            )}
                          </li>
                        </ul>
                      </summary>
                      <div class="content">
                        <table>
                          <tbody>
                            {getAllOrderItemsByUser(userOrders[user]).map(
                              (item, i) => {
                                return (
                                  <tr key={i}>
                                    <td>
                                      <div
                                        title={`${item.product_t.name} ${item.id}`}
                                        className="product"
                                      >
                                        <div className="avatar">
                                          <img
                                            src={
                                              item.product_t.product.image[0]
                                                .url
                                            }
                                          />
                                        </div>
                                        {item.product_t.name}
                                      </div>
                                    </td>
                                    <td>{item.quantity}x</td>
                                    <td className="amount">
                                      {item.total_price} {item.currency.symbol}
                                    </td>
                                  </tr>
                                );
                              }
                            )}
                          </tbody>
                        </table>
                      </div>
                    </details>
                  );
                })}
              </div>
              <CheckoutWrapper>
                <div className="checkout">
                  <ul>
                    <li class="title-name">
                      {formatMessage({
                        id: "components.table.tableDetail.totalPriceText",
                      })}
                    </li>
                    <EventNoteOutlined
                      onClick={() =>
                        updateOrdersToPaymentComplete(getAllOrderItems())
                      }
                      style={{
                        fontSize: "1.8rem",
                        color: "#6dbb1a",
                        marginRight: "22px",
                      }}
                    />
                    <li class="amount">
                      {table.order_headers.reduce((sum, val) => {
                        return (sum += val.unit_price);
                      }, 0)}
                      ₺
                    </li>
                  </ul>
                </div>
              </CheckoutWrapper>
            </>
          ) : (
            <BlankTableWrapper>
              <h2 style={{ fontWeight: 400 }}>
                <q>
                  {formatMessage({
                    id: "components.table.tableDetail.blankTable",
                  })}
                </q>
              </h2>
            </BlankTableWrapper>
          )}
        </TableDetailWrapper>
      </CSSTransition>
    </Wrapper>
  );
}
TableDetails.propTypes = {
  table: PropTypes.object,
};

export default TableDetails;
