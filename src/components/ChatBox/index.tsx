import { useEffect, useState } from "react";
import { Box, Chat, Input, Message, Wrapper } from "./style";
import { child, onValue, push } from "firebase/database";
import { dbRef } from "../../firebase/firebase";

interface chat {
  user: string;
  text: string;
}

function ChatBox() {
  const roomRef = child(dbRef, "room1");
  const [user, setUser] = useState("");
  const [text, setText] = useState("");
  const [chat, setChat] = useState<chat[]>([]);
  useEffect(() => {
    const userName = prompt("請輸入名稱");
    setUser(userName || "");
    onValue(roomRef, (snap) => {
      const data = snap.val();
      const chatList = Object.values(data);
      setChat(chatList as chat[]);
    });
  }, []);
  function sendMessage() {
    const data = { user, text };
    push(roomRef, data);
  }

  return (
    <Wrapper>
      <Chat>
        <Box>
          {chat.map((el, i) => (
            <Message key={i} $idenity={el.user === user}>
              <p>{el.text}</p>
            </Message>
          ))}
        </Box>
        <Input>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setText("");
                sendMessage();
              }
            }}
          />
        </Input>
      </Chat>
    </Wrapper>
  );
}

export default ChatBox;
