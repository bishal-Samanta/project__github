import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <Container>
        <Content>
            <Logo>
                <Link to="/home">
                    <img src="/images/home-logo.svg" alt="Home Logo" />
                </Link>
            </Logo>
            <Search>
                <div>
                    <input type="text" name="" id="" placeholder='Search'/>
                </div>
                <SearchIcon>
                    <img src="/images/search-icon.svg" alt="" />
                </SearchIcon>
            </Search>
        </Content>
    </Container>
  )
}


const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100;
`;


const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`;


const Search = styled.div`
    flex-grow: 1;
    opacity: 1;
    position: relative;
    & > div {
        max-width: 280px;

        input {
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0,0,0,0.9);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.17;
            font-weight: 400;
            font-size: 14px;
            border-color: #dce6f1;
            height: 34px;
            vertical-align: text-top;
        }
    }
`;

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;

`;