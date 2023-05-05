import React, { ReactNode } from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';

interface Props {
  courses: Array<ReactNode>;
  plannedEvents: Array<ReactNode>;
}

export const MainContent = ({ courses, plannedEvents }: Props) => {
  return (
    <>
      <Link to="/api/teacher/courses">
        <S.Title>My Courses</S.Title>
      </Link>
      <S.Courses>{courses}</S.Courses>
      <Link to="/api/teacher/Calendar">
        <S.Title style={{ marginTop: '60px' }}>Event</S.Title>
      </Link>
      <S.Events>{plannedEvents}</S.Events>
    </>
  );
};
