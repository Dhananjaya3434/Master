import { pdf } from '@react-pdf/renderer';

const generatePdf = async (MyPdf: any) => {
  const url = URL.createObjectURL(new Blob([await pdf(MyPdf).toBlob()], { type: 'application/pdf' }));
  return url;
};

export default generatePdf;