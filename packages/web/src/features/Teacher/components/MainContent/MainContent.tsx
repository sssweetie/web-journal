import * as S from './styled';
import { Link, useParams } from 'react-router-dom';
import { Course } from '../Course';
import { PlannedEvent } from '../PlannedEvent';
import { httpClient } from '../../../services/httpClient';
import { Schedule } from '@web-journal/libs';
import { useCourses } from '../Courses/useCourses';
import { coursesApi } from '../Courses/coursesApi';
import { useCalendar } from '../../../Calendar/hooks/useCalendar';
import { calendarApi } from '../../../Calendar/api/calendarApi';

export const MainContent = () => {
  const { courses } = useCourses(coursesApi(httpClient));
  const { recentlyActivities } = useCalendar(calendarApi(httpClient));
  const params = useParams();

  return (
    <>
      <Link to={`/api/teacher/${params.teacherId}/courses`}>
        <S.Title>Мои курсы</S.Title>
      </Link>
      <S.CoursesSection>
        {courses.map(
          (data: any, index: number) =>
            index < 3 && <Course key={data.id} data={data} />
        )}
      </S.CoursesSection>
      <Link to={`/api/teacher/${params.teacherId}/calendar`}>
        <S.Title style={{ marginTop: '60px' }}>Ближайшие события</S.Title>
      </Link>
      <S.Events>
        {recentlyActivities.map(
          (recentlyActivity: Schedule, index: number) =>
            index < 4 && (
              <PlannedEvent key={index} plannedEvent={recentlyActivity} />
            )
        )}
      </S.Events>
    </>
  );
};
