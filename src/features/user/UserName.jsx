import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((store) => store.user.userName);

  return (
    <div className="text-sm font-semibold hidden md:block">{userName}</div>
  );
}

export default UserName;
