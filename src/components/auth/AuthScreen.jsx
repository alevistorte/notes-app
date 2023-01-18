import React from "react";
import { Outlet } from "react-router-dom";

export const AuthScreen = () => {
  // const dispatch = useDispatch();

  // const [checking, setChecking] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // // getting credentials
  // useEffect(() => {
  //   firebase.onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch(login(user.uid, user.displayName));
  //       setIsLoggedIn(true);
  //     }

  //     setChecking(false);
  //   });
  // }, [dispatch, setChecking]);

  // if (checking) {
  //   return <h1>Espere...</h1>;
  // }

  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Outlet />
      </div>
    </div>
  );
};
