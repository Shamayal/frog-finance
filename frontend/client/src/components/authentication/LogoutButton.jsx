import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = (props) => {
  const { logout , isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>
      <span className='font-poppins m-2'>{props.userName}</span>
      <button className="btn btn-dark" onClick={() => logout()}>
        Logout
      </button>
      </>

    )
  )
};

export default LogoutButton;