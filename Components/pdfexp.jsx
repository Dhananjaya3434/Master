import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import {pdfjs} from 'react-pdf'
function pdfexp() {
    pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
export default pdfexp;