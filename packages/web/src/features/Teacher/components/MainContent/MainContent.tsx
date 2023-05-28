import * as S from './styled';
import { Link, useParams } from 'react-router-dom';
import { Course } from '../Course';
import { PlannedEvent } from '../PlannedEvent';

interface Props {
  plannedEvents: any;
}

const courses: any = [];

export const MainContent = ({ plannedEvents }: Props) => {
  const params = useParams();

  return (
    <>
      <Link to={`/api/teacher/${params.teacherId}/courses`}>
        <S.Title>My Courses</S.Title>
      </Link>
      <S.CoursesSection>
        {/* {courses.map(
          (course: any, index: number) =>
            index < 3 && <Course key={course.id} course={course} />
        )} */}
      </S.CoursesSection>
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
