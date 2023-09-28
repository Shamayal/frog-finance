import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import axios from "axios";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            // Get user information from Auth0
            const { sub, email, nickname } = user;
            console.log("check this user out", user)

            // Send user information to your server for login check
            axios
                .post("http://localhost:3030/users/logincheck", {
                    authID: sub,
                    email: email,
                    nickname: nickname,
                })
                .then(({ data }) => {
                    // Store the user ID in sessionStorage
                    console.log("check data", data)
                    // const user = data;
                    window.sessionStorage.setItem("userID", data.userID);
                    console.log("check userID", user.sub)
                })
                .catch((error) => {
                    console.error("Error while checking login:", error);
                });
        }
    }, [user, isAuthenticated]);

    return (
        isAuthenticated && (
            <article className="column">
                {user?.picture && <img src={user.picture} alt={user?.name} />}
                <h2>{user?.name}</h2>
                <h2>auth_id: {user.sub}</h2>
                <ul>
                    {Object.keys(user).map((objKey, i) => (
                        <li key={i}>
                            {objKey}: {user[objKey]}
                        </li>
                    ))}
                </ul>
            </article>
        )
    );
};

export default Profile;
