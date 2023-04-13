import { AxiosInstance } from 'axios';
import React from 'react';

export const teacherApi = (httpClient: AxiosInstance) => ({
  getLessons: async () => {
    const response = await httpClient.get('/teacher/lessons');
    return response.data;
  },
  getEvents: async () => {
    const response = await httpClient.get('/teacher/events');
    return response.data;
  },
  getSettings: async () => {
    const response = await httpClient.get('/teacher/settings');
    return response.data;
  },
  getPersonalInfo: async () => {
    const response = await httpClient.get('/teacher/personalInfo');
    return response.data;
  },
});
