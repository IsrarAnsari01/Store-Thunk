import { useEffect } from "react";
import { fetchUser } from "../store/Actions/UserAction";
import { connect } from "react-redux";
function User(props) {
  //   const Users = useSelector((state) => state.User);
  //   console.log(Users)
  console.log(props);
  useEffect(() => {
    //   console.log("Inside UseEffect")
    // let test = fetchUser();
    // console.log(test);
    fetchUser()
  }, []);

  return (
    <>
      {/* {Users.loading ? (
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
      )} */}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    Users: state.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
