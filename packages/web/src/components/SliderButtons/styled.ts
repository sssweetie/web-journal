import styled from 'styled-components';

export const SliderButtons = styled.div`
  display: flex;
  width: 9.375rem;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  right: 0px;
  top: 5px;
`;

export const SlideRight = styled.button`
  background-image: url('../../../../assets/Arrow.svg');
  border: 0;
  background-repeat: no-repeat;
  background-position: center;
  height: 3rem;
  width: 4.5rem;
`;
export const SlideLeft = styled.button`
  background-image: url('../../../../assets/Arrow.svg');
  transform: rotate(180deg);
  border: 0;
  background-repeat: no-repeat;
  background-position: center;
  height: 3rem;
  width: 4.5rem;
`;
