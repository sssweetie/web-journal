import React from 'react';
import * as S from './styled';
import { useNavigate, useParams } from 'react-router-dom';

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
  const params = useParams();
  return (
    <S.Wrapper>
      <S.Background />
      <S.Container>
        <S.CourseName
          id={course._id}
          onClick={() =>
            navigate(`/api/teacher/${params.teacherId}/course/${course._id}`)
          }
        >
          {course.name}
        </S.CourseName>
        <S.CourseDescription>{course.description}</S.CourseDescription>
      </S.Container>
    </S.Wrapper>
  );
};
