import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";
//components
import Navbar from "./Navbar";
//styles
import styles from "./Chats.module.css";
//context//
import { AuthContext } from "../contexts/AuthContextProvider";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "c83ae1a3-6093-4976-b925-be9593b385b5",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formData, {
              headers: {
                "private-key": "028215e8-b7d8-4a13-be2f-c1e5babec380 ",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };
  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };
  if (!user || loading) return "loading ...";

  return (
    <div className={styles.container}>
      <Navbar LogoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectId="c83ae1a3-6093-4976-b925-be9593b385b5"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
