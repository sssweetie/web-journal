import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from './components/Layout';
import { NavBar } from './components/NavBar';
import { useTeacher } from './hooks/useTeacher';
import { httpClient } from '../services/httpClient';
import { teacherApi } from './teacherApi';

export const Teacher = ({ content }: any) => {
  const params = useParams();
  const navigate = useNavigate();

  const { getPersonalInfo, teacher } = useTeacher(teacherApi(httpClient));

  const settings = ['Main', 'Courses', 'Calendar', 'Settings'];

  const navigateHandler = (url: string) => {
    const urlCapitalize = url.toLocaleLowerCase();
    navigate(`/api/teacher/${params.teacherId}/${urlCapitalize}`);
  };

  return (
    <Layout
      content={content}
      navBar={
        <NavBar
          navigateHandler={navigateHandler}
          personalInfo={teacher}
          settings={settings}
        />
      }
    />
  );
};
