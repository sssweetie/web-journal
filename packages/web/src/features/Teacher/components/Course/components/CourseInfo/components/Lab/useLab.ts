import { ObjectId } from 'mongoose';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ILabApi {
  getStudents: (query: string) => Promise<any>;
}

export interface IHomework {
  date: any;
  name: string;
  passed: boolean;
  checked: string;
  mark: number;
  comment: string;
  _id: ObjectId;
}

export const useLab = (labApi: ILabApi) => {
  const [students, setStudents] = useState<any>([]);

  const location = useLocation();

  const getStudents = async () => {
    try {
      const res = await labApi.getStudents(location.search);
      const homework: IHomework[] = location.state.homework;

      const students = homework.map((item: IHomework) => {
        const findItem = res.data.find(
          (dataItem: any) => dataItem._id === item._id
        );
        return { ...item, ...findItem };
      });

      setStudents(students);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);
  return { students };
};
