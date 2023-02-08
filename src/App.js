import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { showCartActions } from "./Store/showCartSlice";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./Store/CartSlice";
import { getData } from "./Store/CartSlice";
import { cartActions } from "./Store/CartSlice";
let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.showCartButton.showCart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(
    (state) => state.showCartButton.notification
  );
  const GetData = async () => {
    const response = await fetch(
      "https://redux-shopping-app-7158a-default-rtdb.firebaseio.com/cart.json"
    );
    const res = await response.json();
    console.log(res.items);
    dispatch(cartActions.getData([...res.items]));
  };
  useEffect(() => {
    GetData();
  }, []);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
