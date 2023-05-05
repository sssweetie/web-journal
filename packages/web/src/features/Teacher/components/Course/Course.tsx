import React from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

interface Course {
  name: string;
  description: string;
}

interface Props {
  course: Course;
}

export const Course = ({ course }: Props) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Background />
      <S.Container>
        <S.CourseName onClick={() => navigate('/api/teacher/course/:id')}>
          {course.name}
        </S.CourseName>
        <S.CourseDescription>{course.description}</S.CourseDescription>
      </S.Container>
    </S.Wrapper>
  );
};
