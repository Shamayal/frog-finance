import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
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
                    window.sessionStorage.setItem('userID', data.users[0].auth_id);
                    console.log("check userID", data.users[0].auth_id)
                })
                .catch((error) => {
                    console.error("Error while checking login:", error);
                });
        }
    }, [user, isAuthenticated]);
};

export default Profile;
