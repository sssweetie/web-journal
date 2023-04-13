import React from 'react';
import * as S from './styled';

interface Course {
  name: string;
  description: string;
}

interface Props {
  course: Course;
}

export const Course = ({ course }: Props) => {
  return (
    <S.Wrapper>
      <S.Background></S.Background>
      <S.Container>
        <S.CourseName>{course.name}</S.CourseName>
        <S.CourseDescription>{course.description}</S.CourseDescription>
      </S.Container>
    </S.Wrapper>
  );
};
