import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdffile  from './Sample.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess() {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={pdffile} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
export default App;