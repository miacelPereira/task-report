import styled from 'styled-components';

export const HiddenArea = styled.div`
  position: fixed;
  height: 100vh;
  display: block;
  width: 100%;
  top: 0;
`;

export const Container = styled.nav`
  background: #fff;
  height: auto;
  width: max-content;
  box-shadow: 0 0 6px 1px #40404059;
  font-family: Roboto, sans-serif;
  align-items: center;
  padding: 12px 0;
  margin-top: 3px;
  right: 3px;
  border-radius: 5px;
  position: fixed;
  transition: 0.5s;
  color: #555;
  z-index: 5;

  header {
    padding: 8px 16px 16px 16px;
  }

  ul {
    list-style: none;
    padding-top: 12px;
  }

  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 35px;
    padding: 16px;
    text-decoration: none;
    color: inherit;

    :hover {
      background-color: #3331;
    }

    span {
      margin-left: 16px;
    }
  }
`;
