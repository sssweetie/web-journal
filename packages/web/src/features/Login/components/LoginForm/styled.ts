import styled from 'styled-components';

export const Form = styled.form`
  padding: 24px;
  min-width: 20rem;
  min-height: 22.25rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(238, 237, 238, 0.5);
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormTitle = styled.p`
  margin-top: 20px;
  font-weight: 700;
  font-size: 24px;
`;

export const LoginButton = styled.button.attrs(() => ({ type: 'submit' }))`
  background-color: #0075ff;
  border: 0;
  color: white;
  height: 3.125rem;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  border-radius: 10px;
  font-size: 1rem;
  width: 95%;
  box-shadow: 0px 4px 10px rgba(238, 237, 238, 0.5);
`;

export const Error = styled.p`
  border-radius: 8px;
  padding: 12px 0;
  width: 95%;
  text-align: center;
  background-color: #ffe8e8;
  color: #d32f2f;
`;
