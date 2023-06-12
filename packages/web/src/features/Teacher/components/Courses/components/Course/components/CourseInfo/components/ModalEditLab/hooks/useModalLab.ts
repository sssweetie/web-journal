export interface ModalLabApi {
  uploadDocument: (
    file: any,
    labId: string | undefined,
    url: string | undefined
  ) => Promise<void>;
  downloadDocument: () => Promise<void>;
}

export const useModalLab = (modalLabApi: ModalLabApi) => {
  const uploadDocument = async (
    file: any,
    labId: string | undefined,
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
