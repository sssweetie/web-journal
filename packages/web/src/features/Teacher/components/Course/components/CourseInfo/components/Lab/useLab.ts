import { ObjectId } from 'mongoose';
import { useLocation, useParams } from 'react-router-dom';

interface ILabApi {
  getStudents: (query: string) => Promise<any>;
}

export const useLab = (labApi: ILabApi) => {
  const location = useLocation();
  console.log(location.search);

  const getStudents = async () => {
    try {
      const res = await labApi.getStudents(location.search);
      console.log(res);
    } catch {
      console.log('error students');
    }
  };

  return { getStudents };
};
