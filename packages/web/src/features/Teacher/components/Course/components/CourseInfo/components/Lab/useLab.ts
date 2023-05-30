import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

interface ILabApi {
  getStudents: (query: string, url: string) => Promise<any>;
}

export interface IHomework {
  date: any;
  name: string;
  passed: boolean;
  checked: string;
  mark: number;
  comment: string;
  _id: string;
}

export const useLab = (labApi: ILabApi) => {
  const [students, setStudents] = useState<any>([]);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  const getStudents = async () => {
    try {
      setLoader(true);

      const res = await labApi.getStudents(
        location.search,
        location.pathname.slice(4)
      );

      const homework = res.lab.homework;

      const students = homework.map((item: IHomework) => {
        const findItem = res.students.find(
          (dataItem: any) => dataItem._id === item._id
        );
        return { ...item, ...findItem };
      });
      console.log(students);
      setStudents(students);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);
  return { students, getStudents };
};
