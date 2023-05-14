import React, { useState } from "react";
import "./Login.css";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { login } from "./features/userSlice";
const Login = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    imageUrl: "",
  });

  const dispatch = useDispatch();

  const register = () => {
    const { name, email, password, imageUrl } = userData;

    if (!imageUrl) {
      return alert("Please enter image URl");
    }
    
    if (!name) {
      return alert("Please enter a full name");
    }

    if (!email) {
      return alert("Please enter a email ID!!");
    }

    if (!password) {
      return alert("please enter password!!");
    }

    // Use the below code to create a new user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const updatedProfile = {
          displayName: name,
          photoURL: imageUrl,
        };
        updateProfile(user, updatedProfile)
          .then(() => {
            console.log("User profile updated successfully");
            dispatch(login({...user}));
          })
          .catch((error) => {
            console.log("Error updating user profile: ", error);
          });

        // console.log(user);
        // alert("user is created!!");
        // dispatch(
        //   login({
        //     email: user.email,
        //     uid: user.uid,
        //     displayName: name,
        //     photoURL: imageUrl,
        //   })
        // );
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const loginToApp = (e) => {
    const { email, password} = userData;

    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // alert("Successfully signed in!");
        dispatch(login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
        }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        alert(errorMessage);
      });

  };

  return (
    <div className="login">
      <img
        src="https://images.unsplash.com/photo-1592181572975-1d0d8880d175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxpbmtlZGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <form>
        <input
          placeholder="Full name (required if regestering)"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((userData) => {
              return {
                ...userData,
                name: e.target.value,
              };
            })
          }
        />

        <input
          placeholder="Profile pic URL (Optional)"
          type="text"
          value={userData.imageUrl}
          onChange={(e) =>
            setUserData((userData) => {
              return {
                ...userData,
                imageUrl: e.target.value,
              };
            })
          }
        />

        <input
          placeholder="Email"
          type="email"
          value={userData.email}
          onChange={(e) =>
            setUserData((userData) => {
              return {
                ...userData,
                email: e.target.value,
              };
            })
          }
        />
        <input
          placeholder="Password"
          type="password"
          value={userData.password}
          onChange={(e) =>
            setUserData((userData) => {
              return {
                ...userData,
                password: e.target.value,
              };
            })
          }
        />
        <button type="submit" onClick={loginToApp}>
          Login
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};
export default Login;
