import styled from 'styled-components';
import { DEFAULT_COLORS } from '../../styles/global';

export const Container = styled.header`
  background: #fff;
  height: 65px;
  box-shadow: 0 0 6px 1px #40404059;
  font-family: Roboto, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  h1 {
    font-size: 24px;
    color: #444;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background-color: ${DEFAULT_COLORS.PURPLE};
    cursor: pointer;
    transition: 0.5s;

    :hover {
      background-color: ${DEFAULT_COLORS.DARK_PURPLE};
    }
  }
`;
