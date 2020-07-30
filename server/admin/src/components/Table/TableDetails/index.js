import React from "react";
import Wrapper from "./Wrapper";
import Table from "../Table";
import TableDetailWrapper from "./TableDetailWrapper";
import OutsideWrapper from "../OutsideWrapper";
import CheckoutWrapper from "../TableDetails/CheckoutWrapper";
import PropTypes from "prop-types";
import Overlay from "./Overlay";
function TableDetails({ table, setShowDetail }, props) {
  console.log(props);
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
          <details open>
            <summary>
              <ul>
                <li class="title-name">Mert CERTEL</li>
                <li class="amount">104.5 ₺</li>
              </ul>
            </summary>
            <div class="content">
              <table>
                <tr>
                  <td>
                    <div title={"Meyveli Soda"} className="product">
                      <div className="avatar">
                        <img src="https://productimages.hepsiburada.net/s/18/550/9820887187506.jpg" />
                      </div>
                      Meyveli Soda
                    </div>
                  </td>
                  <td>1x</td>
                  <td className="amount">23.22 ₺</td>
                </tr>
                <tr>
                  <td>
                    <div className="product">
                      <div className="avatar">
                        <img src="https://productimages.hepsiburada.net/s/18/550/9820887187506.jpg" />
                      </div>
                      Meyveli Soda
                    </div>
                  </td>
                  <td>1x</td>
                  <td className="amount">23.22 ₺</td>
                </tr>
              </table>
            </div>
          </details>
          <details open>
            <summary>
              <ul>
                <li class="title-name">Elif CERTEL</li>
                <li class="amount">104.5 ₺</li>
              </ul>
            </summary>
            <div class="content">
              <table>
                <tr>
                  <td>
                    <div className="product">
                      <div className="avatar">
                        <img src="https://productimages.hepsiburada.net/s/18/550/9820887187506.jpg" />
                      </div>
                      Meyveli Soda
                    </div>
                  </td>
                  <td>1x</td>
                  <td className="amount">23.22 ₺</td>
                </tr>
                <tr>
                  <td>
                    <div className="product">
                      <div className="avatar">
                        <img src="https://productimages.hepsiburada.net/s/18/550/9820887187506.jpg" />
                      </div>
                      Meyveli Soda
                    </div>
                  </td>
                  <td>1x</td>
                  <td className="amount">23.22 ₺</td>
                </tr>
              </table>
            </div>
          </details>
          <details open>
            <summary>
              <ul>
                <li class="title-name">Raziye CERTEL</li>
                <li class="amount">11.8 ₺</li>
              </ul>
            </summary>
            <div class="content">
              <table>
                <tr>
                  <td>
                    <div className="product">
                      <div className="avatar">
                        <img src="https://productimages.hepsiburada.net/s/18/550/9820887187506.jpg" />
                      </div>
                      Meyveli Soda
                    </div>
                  </td>
                  <td>1x</td>
                  <td className="amount">23.22 ₺</td>
                </tr>
                <tr>
                  <td>
                    <div className="product">
                      <div className="avatar">
                        <img src="https://productimages.hepsiburada.net/s/18/550/9820887187506.jpg" />
                      </div>
                      Meyveli Soda
                    </div>
                  </td>
                  <td>1x</td>
                  <td className="amount">23.22 ₺</td>
                </tr>
              </table>
            </div>
          </details>
          <details open>
            <summary>
              <ul>
                <li class="title-name">Figen CERTEL</li>
                <li class="amount">35.02 ₺</li>
              </ul>
            </summary>
            <div class="content">
              <table>
                <tr>
                  <td>
                    <div className="product">
                      <div className="avatar">
                        <img src="https://productimages.hepsiburada.net/s/18/550/9820887187506.jpg" />
                      </div>
                      Meyveli Soda
                    </div>
                  </td>
                  <td>1x</td>
                  <td className="amount">23.22 ₺</td>
                </tr>
                <tr>
                  <td>
                    <div className="product">
                      <div className="avatar">
                        <img src="https://productimages.hepsiburada.net/s/18/550/9820887187506.jpg" />
                      </div>
                      Meyveli Soda
                    </div>
                  </td>
                  <td>1x</td>
                  <td className="amount">23.22 ₺</td>
                </tr>
              </table>
            </div>
          </details>
          <details open>
            <summary>
              <ul>
                <li class="title-name">Mustafa CERTEL</li>
                <li class="amount">22.5 ₺</li>
              </ul>
            </summary>
            <div class="content">
              <table>
                <tr>
                  <td>
                    <div className="product">
                      <div className="avatar">
                        <img src="https://productimages.hepsiburada.net/s/18/550/9820887187506.jpg" />
                      </div>
                      Meyveli Soda
                    </div>
                  </td>
                  <td>1x</td>
                  <td className="amount">23.22 ₺</td>
                </tr>
                <tr>
                  <td>
                    <div className="product">
                      <div className="avatar">
                        <img src="https://productimages.hepsiburada.net/s/18/550/9820887187506.jpg" />
                      </div>
                      Meyveli Soda
                    </div>
                  </td>
                  <td>1x</td>
                  <td className="amount">23.25 ₺</td>
                </tr>
              </table>
            </div>
          </details>
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
