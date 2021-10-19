import React, { Component } from "react";

export const CardContext = React.createContext();

export class CardProvier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItem: []
    };
    this.addToCard = this.addToCard.bind(this);
  }

  addToCard(product) {
    this.setState({
      cartItem: this.state.cartItem.concat(product)
    });
  }
  render() {
    return (
      <CardContext.Provider
        value={{
          cartItem: this.state.cartItem,
          addToCard: this.addToCard
        }}
      >
        {this.props.children}
      </CardContext.Provider>
    );
  }
}
