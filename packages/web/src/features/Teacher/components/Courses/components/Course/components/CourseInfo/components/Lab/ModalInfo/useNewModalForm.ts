import { Homework } from '@web-journal/libs';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

export interface IModalInfoApi {
  updateHomework: (homework: Homework) => Promise<void>;
}

export const useNewModalForm = (
  modalInfoApi: IModalInfoApi,
  onClose: () => void,
  studentId: string,
  getStudents: () => Promise<any>
) => {
  const { register, handleSubmit, reset, setValue } = useForm<Homework>();
  const location = useLocation();

  const submitHomework = async (homework: Homework) => {
    const pathname = location.pathname.slice(4);
    const newHomework = { ...homework, studentId, pathname };
    await modalInfoApi.updateHomework(newHomework);

    getStudents();
    reset();
    onClose();
  };

  return { register, handleSubmit: handleSubmit(submitHomework), setValue };
};
