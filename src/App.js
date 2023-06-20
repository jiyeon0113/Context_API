import React from "react";
import styled from 'styled-components/native';
import User from './contexts/User';
import { UserProvider } from "./contexts/User";
import Input from "./components/Input";

const Container = styled.View`
    flex: 1;
    backgroundColor: '#ffffff';
    alignItems: center;
    justifyContent: center;
`;

const App = () => {
    return (
        <UserProvider>
            <Container>
                <User />
                <Input />
            </Container>
        </UserProvider>
    );
};

export default App;