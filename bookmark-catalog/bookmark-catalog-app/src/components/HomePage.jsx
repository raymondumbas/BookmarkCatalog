import React, {useState} from 'react';
import LoginForm from './LoginForm.jsx'; 
import SignupForm from './SignupForm.jsx';
import BookmarkCatalog from './BookmarkCatalog.jsx';

import { supabase } from '../api/supabaseClient';
import { useAuth } from '../context/AuthContext.jsx'; 
function HomePage(){
    const {user} = useAuth();
    const [view, setView] = useState("login");
    const [userEmail, setUserEmail] = useState("");

    // User is logged in
    if(user){

        const handleLogout = async () => {
            const { error } = await supabase.auth.signOut();
            if (error) {
            console.error('Logout failed:', error.message);
            } else {
            console.log('User logged out');
            }


        };

        return(
            <>
                Logged in as: {user.email}
                <button onClick = {handleLogout}>Log Out</button>
                <BookmarkCatalog/>
            </>
        )
    }

    // User not logged in
    else{

        const changeView = () =>{
            if(view == "login")
                setView("signup")
            if(view == "signup")
                setView("login")
        }

        // Show Login Form
        if( view == "login"){
            return(
                <>
                    <LoginForm changeView = {changeView} />
                    <button onClick = {changeView} >Create new account</button>
                </>
            )
        }

        // Show Signup Form
        if( view == "signup"){
            return(
                <>
                    <SignupForm changeView = {changeView}/>
                    <button onClick = {changeView}>Already have account</button>
                </>
            )
        }

    }

}
export default HomePage;
