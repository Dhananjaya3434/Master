import React, { useState } from 'react';
import generatePdf from './Components/generatePdf';
import MyPdf from './Components/MyPdf';

const App = () => {
    const [url, setUrl] = useState<string | null>(null);
    const handleClick = async () => {
        const pdfUrl = await generatePdf(<MyPdf />);
        setUrl(pdfUrl);
        const alink = document.createElement('a');
        alink.href = pdfUrl;
        alink.download = 'abc.pdf'
        document.body.appendChild(alink)
        alink.click();
        document.body.removeChild(alink);
        
      };
    return (
        <div>
            <button onClick={handleClick}>Down Load PDF</button>   
            {/* {url && (
                <a href={url} download>
                    Click here to download the PDF
                </a>
            )} */}
        </div>
    
    )
};
export default App;