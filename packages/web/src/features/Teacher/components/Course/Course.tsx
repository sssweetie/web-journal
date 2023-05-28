import React from 'react';
import * as S from './styled';
import { useNavigate, useParams } from 'react-router-dom';

interface Course {
  name: string;
  description: string;
  _id: string;
  groupID: string;
}

interface Data {
  courseData: any;
  groupData: any;
}

interface Props {
  data: Data;
}

export const Course = ({ data }: Props) => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <S.Wrapper>
      <S.Background />
      <S.Container>
        <S.CourseName
          id={data.courseData._id}
          onClick={() =>
            navigate(
              `/api/teacher/${params.teacherId}/course/${data.courseData._id}/${data.courseData.groupID}`
            )
          }
        >
          {data.courseData.name}: {data.groupData.name}
        </S.CourseName>
        <S.CourseDescription>{data.courseData.description}</S.CourseDescription>
      </S.Container>
    </S.Wrapper>
  );
};
