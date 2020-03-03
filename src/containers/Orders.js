import React, { Component } from "react";
import api from "../service/api";
import withErrorHandler from "../hoc/withErrorHandler";
import Spinner from "../components/UI/Spinner";
import Order from "../components/Order";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount = async () => {
    const res = await api.get("orders.json");
    const fecthedOrders = [];
    if (res) {
      for (const key in res.data) {
        fecthedOrders.push({ ...res.data[key], id: key });
      }
    }
    this.setState({ orders: fecthedOrders, loading: false });
  };

  render() {
    return (
      <>
        {this.state.loading ? (
          <Spinner />
        ) : (
          this.state.orders.map(order => (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          ))
        )}
      </>
    );
  }
}

export default withErrorHandler(Orders, api);
