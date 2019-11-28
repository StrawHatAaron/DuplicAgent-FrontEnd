import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import {acord25} from './utils/AdobeFile'
import './Adobe.scss'

const ExamplePDFViewer = () => {
    return (
        <>
            <PDFViewer 
                document={acord25}
                style={{display:'none', boxSizing:'none'}}/>
        </>
    );
};
 
export default ExamplePDFViewer;

