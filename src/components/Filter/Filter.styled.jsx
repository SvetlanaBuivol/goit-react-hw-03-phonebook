import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-bottom: 16px;
  svg {
    color: #999;
  }
`;

export const SearchInput = styled.input`
  width: 200px;
  padding: 8px 30px 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  outline: none;
  transition: width 0.3s ease-in-out;

  :focus {
    cursor: text;
    border: none;
    border-bottom: 1px solid #999;
  }
`;
