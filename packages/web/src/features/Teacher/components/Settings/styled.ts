import styled from 'styled-components';
export const FormWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 60px);
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: column;
  grid-column-gap: 20px;
  grid-row-gap: 15px;
`;
