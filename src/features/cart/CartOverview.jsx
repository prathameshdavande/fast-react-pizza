import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantitiy = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantitiy) return;

  return (
    <div className="bg-stone-800 text-sm flex items-center justify-between text-stone-200 font-semibold uppercase px-4 py-4 sm:px-6 md:text-base">
      <p className="text-stone-300 space-x-4 sm:space-x-6 font-semibold ">
        <span>{totalCartQuantitiy} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
