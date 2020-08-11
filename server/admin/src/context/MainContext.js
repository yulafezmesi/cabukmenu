import React, { createContext } from "react";
import axios from "axios";
export const MainContext = createContext();

const updateOrderToPaymentComplete = async (item) => {
  try {
    return await axios.put(`http://localhost:1337/order-items/${item.id}`, {
      order_status: 4,
    });
  } catch (e) {
    console.error(e);
    return e;
  }
};

const updateOrdersToPaymentComplete = async (orderItems) => {
  try {
    const promises = await Promise.all(
      orderItems.map((item) => updateOrderToPaymentComplete(item))
    );
    const err = promises.find((promis) => promis.isAxiosError === true);
    if (err) return strapi.notification.error("app.notification.error.payment");
    strapi.notification.success("app.notification.success.payment");
  } catch (e) {
    strapi.notification.error("app.notification.error.payment");
    console.error(e);
  }
};

const getAllOrders = (orderHeaders) => {
  return orderHeaders.reduce(function (r, a) {
    r[a.user.username] = r[a.user.username] || [];
    r[a.user.username].push(a);
    return r;
  }, Object.create(null));
};

const getAllOrderItemsByUser = (headers) => {
  return headers.reduce((sum, item) => {
    return [...sum, ...item.order_items];
  }, []);
};

const getAllOrderItems = (orderHeaders) => {
  return orderHeaders.reduce((sum, item) => {
    return [...sum, ...item.order_items];
  }, []);
};

// const getTableByUIID = (tableUUID) => {
//   try {
//     return await axios.get(`http://localhost:1337/order-items/${item.id}`, {
//       order_status: 4,
//     });
//   } catch (e) {
//     console.error(e);
//     return e;
//   }
// };
const MainContextProvider = (props) => {
  return (
    <MainContext.Provider
      value={{
        updateOrdersToPaymentComplete,
        getAllOrders,
        getAllOrderItemsByUser,
        getAllOrderItems,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
