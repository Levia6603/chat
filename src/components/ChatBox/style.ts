import styled, { css } from "styled-components";

interface Message {
  readonly $idenity: boolean;
}

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 500px;
  border: 1px solid #000;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: end;
  gap: 8px;
  overflow: scroll;
  width: 100%;
  padding: 10px;
`;

export const Input = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  input {
    width: 80%;
    padding: 4px 8px;
    border: 1px solid #000;
    border-radius: 40px;
    font-size: 16px;
  }
`;

const current = css`
  align-self: flex-end;
`;

const remote = css`
  align-self: flex-start;
  background-color: #000;
  color: #fff;
`;

export const Message = styled.div<Message>`
  display: block;
  overflow-wrap: break-word;
  max-width: 400px;
  padding: 4px 16px;
  border: 1px solid #000;
  border-radius: 20px;
  transition: all 0.3s;

  ${({ $idenity }) => ($idenity ? current : remote)}
`;
