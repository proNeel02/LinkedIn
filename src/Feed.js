import React, { useEffect, useState } from "react";
import "./feed.css";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Post from "./Post";
import { db } from "./Firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from 'react-flip-move';
const Feed = () => {

  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");


  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
  }, []);

  
  const sendPost = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts"), {
      name: user?.displayName,
      description:  user?.email,
      message: input,
      photoUrl: user?.photoURL || '',
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              onChange={(event) =>
                setInput((message) => {
                  return event.target.value;
                })
              }
              value={input}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title={"image"} color={"#70B5F9"} />
          <InputOption
            Icon={SubscriptionsIcon}
            title={"Video"}
            color={"#E7A33E"}
          />

          <InputOption
            Icon={EventAvailableIcon}
            title={"Event"}
            color={"#C0CBCD"}
          />
          <InputOption
            Icon={CalendarMonthIcon}
            title={"Write article"}
            color={"#7fc15E"}
          />
        </div>
      </div>

      {/* Post */}
      <FlipMove>
      {posts.map((post) => {
        return (
          <Post
            key={post.data.id}
            name={post.data.name}
            description={post.data.description}
            message={post.data.message}
            photoUrl={post.data.photoUrl}
          />
        );
      })}
      </FlipMove>
     
    </div>
  );
};

export default Feed;
