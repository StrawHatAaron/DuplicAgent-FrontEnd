import React, {useCallback} from 'react'
import './Uploader.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Dropbox} from 'dropbox'
import {useDropzone} from 'react-dropzone'


export default function Uploader() {

    const dbx = new Dropbox({
        accessToken: '1h4MKn2TgCAAAAAAAAABYwuiXzG-l9ibyJrPECgCr7Dhe5z2awWbNTK0xjJN37OE',
        fetch
    })

    

    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader()
    
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
            // Do whatever you want with the file contents
            // const binaryStr = reader.resultffjfjfj
            console.log(reader)
            dbx.filesUpload({
                path: '/'+reader.result,
                mode: 'add'
            })
        }
        acceptedFiles.forEach(file => reader.readAsBinaryString(file))
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <>
            <div {...getRootProps()} className="upload-container upload-decoration">
                <input {...getInputProps()} />
                <p>
                    <FontAwesomeIcon 
                        className="up-icon"
                        icon="upload"/>  
                    <br/>
                    Drag 'n' drop some files here, or click to select files
                </p>
                
            </div>
            <textarea className="file-notes upload-decoration">
                Some notes to add to the file.
            </textarea>
        </>
    )
}
