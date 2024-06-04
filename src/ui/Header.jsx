import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <Link>Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Prathamesh </p>
    </div>
  );
}

export default Header;
