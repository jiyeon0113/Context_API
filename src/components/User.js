import React, {useContext } from "react";
import styled from 'styled-components/native';
import UserContext from "../contexts/User";

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`;

const User = () => {
    return (
        <UserContext>
            {({user}) => <StyledText>Name: {user.name}</StyledText>}
        </UserContext>
    )
}

export default User;