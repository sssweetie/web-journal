import { IHomework } from '@web-journal/libs';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

export interface IModalInfoApi {
  updateHomework: (homework: IHomework) => Promise<void>;
}

export const useNewModalForm = (
  modalInfoApi: IModalInfoApi,
  onClose: () => void,
  studentId: string,
  getStudents: () => Promise<any>
) => {
  const { register, handleSubmit, reset } = useForm<IHomework>();
  const location = useLocation();

  const submitHomework = async (homework: IHomework) => {
    const pathname = location.pathname.slice(4);
    const newHomework = { ...homework, studentId, pathname };
    await modalInfoApi.updateHomework(newHomework);

    getStudents();
    reset();
    onClose();
  };

  return { register, handleSubmit: handleSubmit(submitHomework) };
};
