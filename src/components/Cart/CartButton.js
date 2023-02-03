import classes from "./CartButton.module.css";
import { showCartActions } from "../../Store/showCartSlice";
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleButton = () => {
    dispatch(showCartActions.toggleShowCart());
  };
  return (
    <button className={classes.button} onClick={toggleButton}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
