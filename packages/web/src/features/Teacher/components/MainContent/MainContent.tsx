import * as S from './styled';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Course } from '../Course';
import { PlannedEvent } from '../PlannedEvent';
import { getCourses } from 'packages/web/src/utils';
import { httpClient } from '../../../services/httpClient';

interface Props {
  plannedEvents: any;
}

export const MainContent = ({ plannedEvents }: Props) => {
  const [courses, setCourses] = useState([]);

  const params = useParams();

  const loadData = async () => {
    const data = await getCourses(httpClient, params.teacherId);
    console.log(data.groups);
    const array = data.courceData.map((course: any, index: number) => ({
      courseData: course,
      groupData: data.groups[index],
    }));
    setCourses(array);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Link to={`/api/teacher/${params.teacherId}/courses`}>
        <S.Title>My Courses</S.Title>
      </Link>
      <S.CoursesSection>
        {courses.map(
          (data: any, index: number) =>
            index < 3 && <Course key={data.id} data={data} />
        )}
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
