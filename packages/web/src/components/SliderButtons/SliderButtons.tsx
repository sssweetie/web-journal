import React from 'react';
import * as S from './styled';

export const SliderButtons = ({
  leftButtonFunction,
  rightButtonFunction,
  leftButtonArg,
  rightButtonArg,
}: any) => {
  return (
    <S.SliderButtons>
      <S.SlideLeft onClick={() => leftButtonFunction(leftButtonArg)} />
      <S.SlideRight onClick={() => rightButtonFunction(rightButtonArg)} />
    </S.SliderButtons>
  );
};
