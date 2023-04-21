import styled from 'styled-components';

export const PageWrapper = styled.main`
  min-width: 52.5rem;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(238, 237, 238, 0.5);
  border-radius: 10px;
  padding: 20px;
  margin-left: 20px;
  position: relative;
`;

export const FormWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 60px);
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: column;
  grid-column-gap: 20px;
  grid-row-gap: 15px;
`;
