import React, { ReactNode } from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';
import { Course } from '../Course';
import { PlannedEvent } from '../PlannedEvent';

interface Props {
  courses: any;
  plannedEvents: any;
}

export const MainContent = ({ courses, plannedEvents }: Props) => {
  return (
    <>
      <Link to="/api/teacher/courses">
        <S.Title>My Courses</S.Title>
      </Link>
      <S.Courses>
        {courses.map(
          (course: any, index: number) =>
            index < 3 && <Course key={course.id} course={course} />
        )}
      </S.Courses>
      <Link to="/api/teacher/Calendar">
        <S.Title style={{ marginTop: '60px' }}>Event</S.Title>
      </Link>
      <S.Events>
        {plannedEvents.map(
          (plannedEvent: any, index: number) =>
            index < 4 && <PlannedEvent plannedEvent={plannedEvent} />
        )}
      </S.Events>
    </>
  );
};
