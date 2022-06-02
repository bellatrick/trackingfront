
import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Center>
          <Logo>REX.</Logo>
        </Center>
        <Right>
        <MenuItem>HOME</MenuItem>
        <MenuItem>ABOUT</MenuItem>
        <MenuItem>SERVICES</MenuItem>
          <MenuItem>TRACK & TRACE</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
          <MenuItem>
                  CONTACT!
                  < ArrowForwardIcon />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;