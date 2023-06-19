import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import axios from "axios";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    // use context and share state
    // can make own usecontext with user_id
    // local and sessions
    // console.log(window.sessionStorage)
    // console.log(window.localStorage)

    // // Save data to sessionStorage
    // sessionStorage.setItem("key", "value");

    // // Get saved data from sessionStorage
    // let data = sessionStorage.getItem("key");

    useEffect(() => {

        // Ask alvin: how to change these into set and get session storage?
        const sub = '25353413bgr';
        const nickname = 'test user';
        const email = "test@example.com";
        console.log(user)

        axios.post('http://localhost:3030/users/logincheck', { id: user.sub, email: user.email, nickname: user.nickname })
            .then(({data}) => {
                console.log(data.users[0].id)
                window.sessionStorage.setItem('userID', data.users[0].id)
            })

            // const userID = window.sessionStorage.getItem('userID')
            // console.log(userID)


    }, [user])

    return (
        isAuthenticated && (
            <article className='column'>
                {user?.picture && <img src={user.picture} alt={user?.name} />}
                <h2>{user?.name}</h2>
                <h2>auth_id: {user.sub}</h2>
                <ul>
                    {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]} </li>)}
                </ul>
            </article>
        )
    )
}

export default Profile