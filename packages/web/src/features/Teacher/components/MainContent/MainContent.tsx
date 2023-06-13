import * as S from './styled';
import { Link, useParams } from 'react-router-dom';
import { httpClient } from '../../../services/httpClient';
import { Schedule } from '@web-journal/libs';
import { useCourses } from '../Courses/hooks/useCourses';
import { coursesApi } from '../Courses/api/coursesApi';
import { useCalendar } from '../../../Calendar/hooks/useCalendar';
import { calendarApi } from '../../../Calendar/api/calendarApi';
import { Course } from '../Courses/components/Course';
import { UpcomingActivity } from '../UpcomingActivity';

export const MainContent = () => {
  const { courses } = useCourses(coursesApi(httpClient));
  const { upcomingActivities } = useCalendar(calendarApi(httpClient));
  const params = useParams();

  return (
    // Главная страница
    <>
      <Link to={`/api/teacher/${params.teacherId}/courses`}>
        <S.Title>Мои курсы</S.Title>
      </Link>
      <S.CoursesSection>
        {courses.map(
          (data: any, index: number) =>
            index < 3 && <Course key={data.id} data={data} /> // Отображение первых трех курсов в списке курсов
        )}
      </S.CoursesSection>
      <Link to={`/api/teacher/${params.teacherId}/calendar`}>
        <S.Title style={{ marginTop: '60px' }}>Ближайшие события</S.Title>
      </Link>
      <S.Events>
        {upcomingActivities.map(
          (
            upcomingActivity: Schedule,
            index: number // Отображение первых четырех ближайших событий в расписании
          ) =>
            index < 4 && (
              <UpcomingActivity
                key={index}
                upcomingActivity={upcomingActivity}
              />
            )
        )}
      </S.Events>
    </>
  );
};
