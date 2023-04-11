import React from 'react';
import * as S from './styled';
import { Course } from '../Course';
import { PlannedEvent } from '../PlannedEvent';

export const MainContent = () => {
  return (
    <S.Wrapper>
      <S.Title>My Courses</S.Title>
      <S.Courses>
        <Course />
        <Course />
        <Course />
      </S.Courses>
      <S.SliderButtons>
        <S.SlideLeft />
        <S.SlideRight />
      </S.SliderButtons>
      <S.Title style={{ marginTop: '60px' }}>Event</S.Title>
      <S.Events>
        <PlannedEvent />
        <PlannedEvent />
        <PlannedEvent />
        <PlannedEvent />
      </S.Events>
    </S.Wrapper>
  );
};
