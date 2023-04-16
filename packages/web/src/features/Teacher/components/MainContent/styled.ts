import styled from 'styled-components';

export const Wrapper = styled.main`
  min-width: 52.5rem;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(238, 237, 238, 0.5);
  border-radius: 10px;
  padding: 20px;
  margin-left: 20px;
  position: relative;
`;

export const Title = styled.p`
  margin: 0;
`;

export const Courses = styled.section`
  display: grid;
  grid-template-columns: 16.25rem 16.25rem 16.25rem;
  grid-column-gap: 1.25rem;
  padding-top: 20px;
`;

export const Events = styled.section`
  display: grid;
  grid-template-columns: 10rem 10rem 10rem 10rem;
  grid-column-gap: 1rem;
  margin-top: 20px;
`;
