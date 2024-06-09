import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <div className="bg-yellow-400 flex justify-between items-center uppercase px-4 py-3 sm:px-6 border-b border-stone-200">
      <Link className="tracking-widest">Fast React Pizza Co.</Link>
      <SearchOrder />
      <UserName />
    </div>
  );
}

export default Header;
