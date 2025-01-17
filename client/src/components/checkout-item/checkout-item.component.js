import React from 'react';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>
          <strong>&#10094;</strong>
        </div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>
          <strong>&#10095;</strong>
        </div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        <strong>&#10005;</strong>
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
