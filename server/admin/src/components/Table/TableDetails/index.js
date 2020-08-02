import React from "react";
import Wrapper from "./Wrapper";
import Table from "../Table";
import TableDetailWrapper from "./TableDetailWrapper";
import OutsideWrapper from "../OutsideWrapper";
import CheckoutWrapper from "../TableDetails/CheckoutWrapper";
import PropTypes from "prop-types";
import Overlay from "./Overlay";
function TableDetails({ table, setShowDetail }) {
  const userOrders = table.order_headers.reduce(function (r, a) {
    r[a.user.username] = r[a.user.username] || [];
    r[a.user.username].push(a);
    return r;
  }, Object.create(null));

  const getAllOrderItems = (headers) => {
    return headers.reduce((sum, item) => {
      return [...sum, ...item.order_items];
    }, []);
  };
  return (
    <Wrapper>
      <Overlay onClick={() => setShowDetail(false)} />
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
        <div class="panel">
          {Object.keys(userOrders).map((user, i) => {
            return (
              <details key={i} open>
                <summary>
                  <ul>
                    <li class="title-name">{user}</li>
                    <li class="amount">
                      {getAllOrderItems(userOrders[user]).reduce(
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
                      {getAllOrderItems(userOrders[user]).map((item, i) => {
                        return (
                          <tr key={i}>
                            <td>
                              <div
                                title={item.product_t.name}
                                className="product"
                              >
                                <div className="avatar">
                                  <img
                                    src={item.product_t.product.image[0].url}
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
                      })}
                    </tbody>
                  </table>
                </div>
              </details>
            );
          })}
        </div>
        <CheckoutWrapper>
          <div className="checkout">
            <table>
              <tr>
                <td>Toplam:</td>
                <td className="amount">1232.4 ₺</td>
              </tr>
            </table>
          </div>
        </CheckoutWrapper>
      </TableDetailWrapper>
    </Wrapper>
  );
}
TableDetails.propTypes = {
  table: PropTypes.object,
};

export default TableDetails;
