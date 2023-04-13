import React from 'react';
import { Layout } from './components/Layout';
import { MainContent } from './components/MainContent';
import { Course } from './components/Course';
import { PlannedEvent } from './components/PlannedEvent';
import { NavBar } from './components/NavBar';

export const Teacher = () => {
  const courses = [{ name: '', description: '' }];
  const plannedEvents = [{ name: '', date: '', lesson: '' }];
  const settings = ['', ''];
  const personalInfo = {
    name: 'Yarik',
    status: 'Teacher',
  };

  return (
    <Layout
      navBar={<NavBar personalInfo={personalInfo} settings={settings} />}
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
    ></Layout>
  );
};
