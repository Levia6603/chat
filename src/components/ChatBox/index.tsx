import { useState } from "react";
import { Box, Chat, Input, Message, Wrapper } from "./style";

function ChatBox() {
  const [text, setText] = useState("");
  const [chat, setChat] = useState<string[]>([]);
  return (
    <Wrapper>
      <Chat>
        <Box>
          {chat.map((el, i) => (
            <Message key={i} $idenity={false}>
              <p>{el}</p>
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
                setChat((prev) => [...prev, text]);
                setText("");
              }
            }}
          />
        </Input>
      </Chat>
    </Wrapper>
  );
}

export default ChatBox;
