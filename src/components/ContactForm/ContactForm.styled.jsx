import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 550px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4px;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;

  :hover div {
    color: #666;
    transform: scale(1.2);
  }
`;

export const Icon = styled.div`
  color: #999;
  font-size: 22px;
  transition: color 0.3s ease, transform 0.3s ease;
`;

export const Button = styled.button`
  background-color: #ccc;
  color: #666;
  padding: 10px 20px;
  margin-left: auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #999;
    color: #fff;
  }
`;

export const Input = styled.input`
  padding: 10px 40px 10px 10px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  background-color: #ddd;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #ccc;
  }
`;
