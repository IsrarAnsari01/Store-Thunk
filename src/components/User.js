import { useEffect } from "react";
import { fetchUser } from "../store/middleWears/userMiddleWear";
import { useSelector, useDispatch } from "react-redux";
function User(props) {
  const Users = useSelector((state) => state.User);
  const dispatch = useDispatch();
  console.log(Users);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      {Users.loading ? (
        <h2>Loading</h2>
      ) : Users.error ? (
        <h2>{Users.error}</h2>
      ) : (
        <>
          <h2>User List </h2>
          <div>
            {Users &&
              Users.data &&
              Users.data.map((user) => <p>{user.name}</p>)}
          </div>
        </>
      )}
    </>
  );
}
export default User;
