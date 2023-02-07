import classes from "./CartButton.module.css";
import { showCartActions } from "../../Store/showCartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const cartQnty=useSelector((state)=>state.cart.totalQuantity)
  const dispatch = useDispatch();
  const toggleButton = () => {
    dispatch(showCartActions.toggleShowCart());
  };
  return (
    <button className={classes.button} onClick={toggleButton}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQnty}</span>
    </button>
  );
};

export default CartButton;
