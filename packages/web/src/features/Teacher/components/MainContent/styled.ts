import styled from 'styled-components';
import Arrow from '../../../../assets/Arrow.svg';

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

export const SliderButtons = styled.div`
  display: flex;
  width: 3.5rem;
  align-items: center;
  justify-content: space-between;
  float: right;
  margin: 20px 20px 0 0;
`;

export const SlideRight = styled.button`
  background-image: url('../../../../assets/Arrow.svg');
  border: 0;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  padding: 12px;
`;
export const SlideLeft = styled.button`
  background-image: url('../../../../assets/Arrow.svg');
  transform: rotate(180deg);
  border: 0;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  padding: 12px;
`;

export const Events = styled.section`
  display: grid;
  grid-template-columns: 10rem 10rem 10rem 10rem;
  grid-column-gap: 1rem;
  margin-top: 20px;
`;
