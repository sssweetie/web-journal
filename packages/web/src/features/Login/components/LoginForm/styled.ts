import styled from 'styled-components';

export const Form = styled.form`
  min-width: 22.5rem;
  min-height: 26.25rem;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(238, 237, 238, 0.5);
  border-radius: 10px;
  align-items: center;
  margin-top: 100px;
`;

export const FormTitle = styled.p`
  font-weight: 400;
  margin-top: 40px;
`;

export const LoginButton = styled.button.attrs(() => ({ type: 'submit' }))`
  background-color: #0075ff;
  border: 0;
  color: white;
  min-width: 18.75rem;
  height: 3.125rem;
  box-shadow: 0px 4px 10px rgba(238, 237, 238, 0.5);
  border-radius: 10px;
  margin-top: 30px;
  font-size: 1rem;
`;

export const AgreementWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 18.75rem;
  margin-top: 20px;
`;

export const AgreementP = styled.p`
  margin: 0;
  font-size: 0.625rem;
  line-height: 13px;
`;
