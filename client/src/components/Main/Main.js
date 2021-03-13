import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import socket from '../../socket';
import Logo from '../Logo/Logo';

const Main = (props) => {
  const roomRef = useRef();
  const userRef = useRef();
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    socket.on('FE-error-user-exist', ({ error }) => {
      if (!error) {
        const roomName = roomRef.current.value;
        const userName = userRef.current.value;

        sessionStorage.setItem('user', userName);
        props.history.push(`/room/${roomName}`);
      } else {
        setErr(error);
        setErrMsg('User name already exist');
      }
    });
  }, [props.history]);

  function clickJoin() {
    const roomName = roomRef.current.value;
    const userName = userRef.current.value;

    if (!roomName || !userName) {
      setErr(true);
      setErrMsg('Enter Room Name or User Name');
    } else {
      socket.emit('BE-check-user', { roomId: roomName, userName });
    }
  }

  return (
    <>
      {' '}
      <Logo />
      <Row>
        <Title>Video-Conference Demo</Title>
      </Row>
      <Row>
        <SubTitle>
          Start a video chat and connect with your loved ones.
        </SubTitle>
      </Row>
      <MainContainer>
        <Row>
          <Label htmlFor='roomName'>Room Name</Label>
          <Input type='text' id='roomName' ref={roomRef} />
        </Row>
        <Row>
          <Label htmlFor='userName'>User Name</Label>
          <Input type='text' id='userName' ref={userRef} />
        </Row>
        <JoinButton onClick={clickJoin}> Join </JoinButton>
        {err ? <Error>{errMsg}</Error> : null}
      </MainContainer>
    </>
  );
};

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  font-weight: 500;
  color: whitesmoke;
  line-height: 0.1;
`;
const SubTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 100;
  color: whitesmoke;
  line-height: 0.5;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.11);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  padding: 25px 45px;
  margin: 25px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 15px;
  line-height: 35px;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 150px;
  height: 35px;
  margin-left: 15px;
  padding-left: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
`;

const Error = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: #e85a71;
`;

const JoinButton = styled.button`
  height: 40px;
  margin-top: 35px;
  outline: none;
  border: none;
  border-radius: 15px;
  color: #d8e9ef;
  background-color: #4ea1d3;
  font-size: 25px;
  font-weight: 500;

  :hover {
    background-color: #7bb1d1;
    cursor: pointer;
  }
`;

export default Main;
