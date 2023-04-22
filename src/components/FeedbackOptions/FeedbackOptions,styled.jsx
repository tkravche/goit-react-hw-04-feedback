import styled from 'styled-components';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;

export const FeedbackOptionsButton = styled.button`
  padding-left: 15px;
  padding-right: 15px;
  background-color: blanchedalmond;
  box-shadow: rgba(99, 48, 13, 0.16) 0px 3px 6px,
    rgba(150, 88, 18, 0.452) 0px 3px 6px;
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  color: chocolate;
  border: 3px double chocolate;
  border-radius: 5px;
  transition: background-color 0.2s ease-in, color 0.2s ease-in 0.1s;
  :hover {
    background-color: chocolate;
    color: blanchedalmond;
  }
`;
