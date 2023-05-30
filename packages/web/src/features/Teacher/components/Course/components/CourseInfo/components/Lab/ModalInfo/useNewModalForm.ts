import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

export interface IModalInfoApi {
  updateHomework: (data: any) => Promise<void>;
}

export const useNewModalForm = (
  modalInfoApi: IModalInfoApi,
  onClose: () => void,
  studentId: string
) => {
  const { register, handleSubmit, reset } = useForm();
  const location = useLocation();

  const submitHomework = async (data: any) => {
    const pathname = location.pathname.slice(4);
    const homework = { ...data, studentId, pathname };

    await modalInfoApi.updateHomework(homework);
    reset();
    onClose();
    window.location.reload();
  };

  return { register, handleSubmit: handleSubmit(submitHomework) };
};
