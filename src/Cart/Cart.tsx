import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../App';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const [checkout, setCheckout] = useState(false);
  const [isUserCheckedOut, setUserCheckedOut] = useState(false)

  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  const validateEmail = (email: String) => {
    let validate = String(email)
      .toLowerCase()
      .match(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      );
    !!validate ? setCheckout(true) : setCheckout(false);
  };
  const userCheckedOut = () => {
    setUserCheckedOut(true);
  }
  return (
    <Wrapper>
      {!isUserCheckedOut ? <>
        <h2>Your Shopping Cart</h2>
        <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        {cartItems.length === 0 ? <p>No items in cart.</p> : null}
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
        <br />
        <Grid
          container
          justify="center"
          direction='column'
        >
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your Email Address"
            type="email"
            variant="outlined"
            onChange={(e) => validateEmail(e.target.value)}
            disabled={cartItems.length === 0 ? true : false}
          // fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            disabled={!checkout || cartItems.length === 0}
            onClick={userCheckedOut}
            data-testid='checkout_button'
          >
            Checkout
          </Button>
        </Grid>
      </> :
        <>
          <Grid
            container
            justify="center"
          >
            <h2>Thank you for Shopping </h2>
            <h2>A Confirmation has been sent to your email </h2>
          </Grid>
        </>
      }

    </Wrapper>
  );
};

export default Cart;
