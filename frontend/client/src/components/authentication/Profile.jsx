import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            const { sub, email, nickname } = user;

            axios
                .post("http://localhost:3030/users/logincheck", {
                    authID: sub,
                    email: email,
                    nickname: nickname,
                })
                .then(({ data }) => {
                    const userId = data.auth_id;
                    window.sessionStorage.setItem('userID', userId);
                })
                .catch((error) => {
                    console.error("Error while checking login:", error);
                });
        }
    }, [user, isAuthenticated]);

};

export default Profile;
