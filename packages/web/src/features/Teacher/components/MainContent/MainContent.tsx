import * as S from './styled';
import { Link, useParams } from 'react-router-dom';
import { Course } from '../Course';
import { PlannedEvent } from '../PlannedEvent';

interface Props {
  courses: any;
  plannedEvents: any;
}

export const MainContent = ({ courses, plannedEvents }: Props) => {
  const params = useParams();

  return (
    <>
      <Link to={`/api/teacher/${params.teacherId}/courses`}>
        <S.Title>My Courses</S.Title>
      </Link>
      <S.Courses>
        {courses.map(
          (course: any, index: number) =>
            index < 3 && <Course key={course.id} course={course} />
        )}
      </S.Courses>
      <Link to={`/api/teacher/${params.teacherId}/calendar`}>
        <S.Title style={{ marginTop: '60px' }}>Event</S.Title>
      </Link>
      <S.Events>
        {plannedEvents.map(
          (plannedEvent: any, index: number) =>
            index < 4 && (
              <PlannedEvent key={index} plannedEvent={plannedEvent} />
            )
        )}
      </S.Events>
    </>
  );
};
