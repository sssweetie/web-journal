import * as S from './styled';
import { Link, useParams } from 'react-router-dom';
import { Course } from '../Course';
import { PlannedEvent } from '../PlannedEvent';
import { httpClient } from '../../../services/httpClient';
import { IPlannedEvent } from '@web-journal/libs';
import { useCourses } from '../Courses/useCourses';
import { coursesApi } from '../Courses/coursesApi';

interface Props {
  plannedEvents: IPlannedEvent[];
}

export const MainContent = ({ plannedEvents }: Props) => {
  const { courses } = useCourses(coursesApi(httpClient));

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
