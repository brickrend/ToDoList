import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 300px;
  min-height: 300px;
  background: #161a2b;
  text-align: center;
  color: white;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
`;

export const ListWrpper = styled.div`
  position: relative;
  right: 20em;
  top: 1em;
`;

export const FinishedListWrpper = styled.div`
  position: relative;
  left: 20em;
  bottom: 1em;
`;
export const taskInput = styled.button`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #5d0cff;
  outline: none;
  width: 320px;
  background: transparent;
  color: #fff;
`;
export const todoButton = styled.div`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;

  outline: none;
`;
