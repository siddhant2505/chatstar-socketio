import React, { useEffect, useState } from "react";

import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";
import { ThemeProvider } from "@chakra-ui/core";
import Form from "./components/Form";
import Home from "./components/Home";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();

  const alanKey =
    "6850334add5869853e8023acb95b933e2e956eca572e1d8b807a3e2338fdd0dc/stage";
  const [message, setMessage] = useState("");
  useEffect(() => {
    alanBtn({
      key: alanKey,
      rootEl: document.getElementById("alan-btn"),
      onCommand: ({ command, text }) => {
        if (command === "input") {
          console.log(text);
          //console.log(articles);
          setMessage(text);
        }
      },
    });
  }, []);
  return (
    <ThemeProvider>
      <div className="App">
        {!user ? (
          <Form />
        ) : (
          <Home rooms={rooms} users={users} message={message} />
        )}
        {/* //className="App" */}

        {/* <Home rooms={rooms} users={users} message={message} /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;

const users = [
  { id: "1", name: "Suresh", urlImage: "", status: "Available" },
  { id: "2", name: "Mahendra", urlImage: "", status: "Mujhse bhi baat kro" },
  { id: "3", name: "Narendra", urlImage: "", status: "Me tumhara hero hu" },
  { id: "4", name: "Modi", urlImage: "", status: "Available" },
  { id: "5", name: "Luv", urlImage: "", status: "Urgent Calls Only" },
  { id: "6", name: "Kush", urlImage: "", status: "Rise Above Hate" },
  { id: "7", name: "Titu", urlImage: "", status: "Urgent Calls Only" },
  { id: "8", name: "Sonu", urlImage: "", status: "Chess khelo" },
  { id: "9", name: "Lakhan", urlImage: "", status: "I m a lone survivor" },
  { id: "10", name: "Ramesh", urlImage: "", status: "Playing with Life" },
  { id: "11", name: "Amit", urlImage: "", status: "WANT TO QUIT" },
];
const rooms = [
  {
    name: "Pubg",
    participants: ["11", "3", "5"],
    messages: [
      { text: "Hello", sentAt: "12:50 pm", userId: "3" },
      { text: "Pubg khelega", sentAt: "12:50 pm", userId: "11" },
      { text: "Aja lobby", sentAt: "12:51 pm", userId: "3" },
      { text: "Lets go", sentAt: "12:51 pm", userId: "5" },
    ],
    urlImage:
      "https://lh3.googleusercontent.com/hYgF0Ss2y8J5sH58MQ29QB71h3XoKGXuuxbyT2kdYmAQskMkOEVQJ8uS2bMLAlga4mg",
  },
  {
    name: "Tiktok",
    participants: ["1", "3", "2", "4", "7"],
    messages: [
      { text: "TikTok banaye kya", sentAt: "3:00 pm", userId: "3" },
      { text: "Camera dhanka to lelle", sentAt: "3:50 pm", userId: "1" },
      { text: "Chalo banate h na", sentAt: "4:01 pm", userId: "2" },
      { text: "Banao banao me dekh rha hu", sentAt: "4:30 pm", userId: "3" },
      { text: "waah ji waah kya baat h", sentAt: "4:31 pm", userId: "4" },
    ],
    urlImage:
      "https://lh3.googleusercontent.com/z5nin1RdQ4UZhv6fa1FNG7VE33imGqPgC4kKZIUjgf_up7E-Pj3AaojlMPwNNXaeGA",
  },
  {
    name: "FAMILY",
    participants: ["6", "3", "8", "9", "10"],
    messages: [
      { text: "Good Morning hai ji", sentAt: "1:50 pm", userId: "3" },
      { text: "Good morning ji", sentAt: "2:50 pm", userId: "6" },
      { text: "Arey GOOd morning morning", sentAt: "2:51 pm", userId: "8" },
      { text: "CHALO good morning ji", sentAt: "2:52 pm", userId: "9" },
      {
        text: "Chalo to me bhi good morning ji",
        sentAt: "2:53 pm",
        userId: "10",
      },
    ],
    urlImage:
      "https://i.pinimg.com/originals/b4/4c/2f/b44c2f7347d47a3d4bdab60481239e20.jpg",
  },
];
