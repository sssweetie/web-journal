import React, { ReactNode } from 'react';
import * as S from './styled';

interface Props {
  courses: Array<ReactNode>;
  plannedEvents: Array<ReactNode>;
}

export const MainContent = ({ courses, plannedEvents }: Props) => {
  return (
    <S.Wrapper>
      <S.Title>My Courses</S.Title>
      <S.Courses>{courses}</S.Courses>
      <S.SliderButtons>
        <S.SlideLeft />
        <S.SlideRight />
      </S.SliderButtons>
      <S.Title style={{ marginTop: '60px' }}>Event</S.Title>
      <S.Events>{plannedEvents}</S.Events>
    </S.Wrapper>
  );
};
