import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { MainContent } from './components/MainContent';
import { Course } from './components/Course';
import { PlannedEvent } from './components/PlannedEvent';
import { NavBar } from './components/NavBar';
import { useTeacher } from './hooks/useTeacher';
import { httpClient } from '../services/httpClient';
import { teacherApi } from './teacherApi';
import { Courses, Title } from './components/MainContent/styled';
import { Settings } from './components/Settings';
import { CourseInfo } from './components/Course/components/CourseInfo';
import { Lab } from './components/Course/components/CourseInfo/components';

export const Teacher = () => {
  const courses = [
    { name: 'Eng', description: 'Some description' },
    { name: 'Eng', description: 'Some description' },
    { name: 'Eng', description: 'Some description' },
    { name: 'Eng', description: 'Some description' },
    { name: 'Eng', description: 'Some description' },
    { name: 'Eng', description: 'Some description' },
    { name: 'Eng', description: 'Some description' },
  ];
  const plannedEvents = [
    { name: 'Utilization', date: 'MN 10:00', lesson: 'Lesson 6' },
    { name: 'Utilization', date: 'MN 10:00', lesson: 'Lesson 6' },
    { name: 'Utilization', date: 'MN 10:00', lesson: 'Lesson 6' },
    { name: 'Utilization', date: 'MN 10:00', lesson: 'Lesson 6' },
  ];
  const settings = ['Main', 'Courses', 'Calendar', 'Settings'];
  const personalInfo = {
    name: 'Yarik',
    status: 'Teacher',
  };

  const navigate = useNavigate();
  const navigateHandler = (url: string) => {
    const urlCapitalize = url.toLocaleLowerCase();
    navigate(`/api/teacher/${urlCapitalize}`);
  };

  const { getEvents, getLessons, getPersonalInfo, getSettings } = useTeacher(
    teacherApi(httpClient)
  );

  return (
    <Layout
      navBar={
        <NavBar
          navigateHandler={navigateHandler}
          personalInfo={personalInfo}
          settings={settings}
        />
      }
      mainContent={
        <MainContent
          courses={courses.map(
            (course, index) => index < 3 && <Course course={course} />
          )}
          plannedEvents={plannedEvents.map(
            (plannedEvent, index) =>
              index < 4 && <PlannedEvent plannedEvent={plannedEvent} />
          )}
        />
      }
      courses={
        <>
          <Title>My courses</Title>
          <Courses>
            {courses.map((course) => (
              <Course course={course} />
            ))}
          </Courses>
        </>
      }
      settings={<Settings />}
      courseInfo={<CourseInfo />}
      lab={<Lab />}
    />
  );
};
