import { FileDB } from '@web-journal/libs';

export interface ModalLabApi {
  uploadDocument: (
    file: FileDB,
    labId: string,
    url: string | undefined
  ) => Promise<void>;
  downloadDocument: () => Promise<void>;
}

export const useModalLab = (modalLabApi: ModalLabApi) => {
  // Редактирование информации о лабораторной работе
  // Загрузка документа
  const uploadDocument = async (
    file: FileDB,
    labId: string,
    url: string | undefined
  ) => {
    try {
      await modalLabApi.uploadDocument(file, labId, url);
    } catch (error) {
      console.error(error);
    }
  };
  return { uploadDocument };
};
