import React from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

interface Course {
  name: string;
  description: string;
  _id: string;
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
        <S.CourseName
          id={course._id}
          onClick={() => navigate(`/api/teacher/course/${course._id}`)}
        >
          {course.name}
        </S.CourseName>
        <S.CourseDescription>{course.description}</S.CourseDescription>
      </S.Container>
    </S.Wrapper>
  );
};
