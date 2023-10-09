import { useSelector } from "react-redux";
import Itemlist from "./Itemlist";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      Cart
      <Itemlist inf={cartItems} />
    </div>
  );
};
export default Cart;
