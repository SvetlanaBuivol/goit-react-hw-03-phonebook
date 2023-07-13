import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-around;
  padding: 12px;
  padding-left: 30px;
  color: #555;
  -webkit-tap-highlight-color: transparent;

  :hover {
    background: #fff;
    outline: none;
    position: relative;
    background-color: #fff;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  :hover::after {
    content: '';
    position: absolute;
    background-color: transparent;
    bottom: 100%;
    right: 0;
    height: 35px;
    width: 35px;
    border-bottom-right-radius: 18px;
    box-shadow: 0 20px 0 0 #fff;
  }

  :hover::before {
    content: '';
    position: absolute;
    background-color: transparent;
    top: 38px;
    right: 0;
    height: 35px;
    width: 35px;
    border-top-right-radius: 18px;
    box-shadow: 0 -20px 0 0 #fff;
  }
  p {
    width: 140px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
  }

  div {
    display: flex;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: #555;
  background-color: #ccc;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  :hover {
    background-color: #999;
  }
`;
