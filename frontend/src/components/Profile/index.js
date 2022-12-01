import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutButton";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log("user", user);
  getAccessTokenSilently().then((token) =>
    localStorage.setItem("accessToken", token)
  );

  return (
    isAuthenticated &&
    !isLoading && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <LogoutButton />
      </div>
    )
  );
};

export default Profile;
