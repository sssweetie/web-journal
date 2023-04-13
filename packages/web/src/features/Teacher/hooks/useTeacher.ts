import React from 'react';

interface TeacherApi {
  getPersonalInfo: () => Promise<any>;
  getLessons: () => Promise<any>;
  getSettings: () => Promise<any>;
  getEvents: () => Promise<any>;
}

export const useTeacher = (teacherApi: TeacherApi) => {
  const getPersonalInfo = async () => {
    try {
      await teacherApi.getPersonalInfo();
    } catch (err) {
      console.error(err);
    }
  };
  const getLessons = async () => {
    try {
      await teacherApi.getLessons();
    } catch (err) {
      console.error(err);
    }
  };
  const getSettings = async () => {
    try {
      await teacherApi.getSettings();
    } catch (err) {
      console.error(err);
    }
  };
  const getEvents = async () => {
    try {
      await teacherApi.getEvents();
    } catch (err) {
      console.error(err);
    }
  };
  return { getEvents, getSettings, getPersonalInfo, getLessons };
};
