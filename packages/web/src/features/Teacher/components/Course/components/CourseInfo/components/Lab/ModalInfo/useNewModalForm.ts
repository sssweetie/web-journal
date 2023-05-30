import { useAppDispatch } from 'packages/web/src/store/hooks';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

export interface IModalInfoApi {
  updateHomework: (data: any) => Promise<void>;
}

export const useNewModalForm = (
  modalInfoApi: IModalInfoApi,
  onClose: () => void,
  studentId: string,
  getStudents: () => Promise<any>
) => {
  const { register, handleSubmit, reset } = useForm();
  const location = useLocation();

  const submitHomework = async (data: any) => {
    const pathname = location.pathname.slice(4);
    const homework = { ...data, studentId, pathname };
    await modalInfoApi.updateHomework(homework);

    getStudents();
    reset();
    onClose();
  };

  return { register, handleSubmit: handleSubmit(submitHomework) };
};
