import React, {useRef, useState, useEffect} from 'react'
import './Uploader.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Dropbox} from 'dropbox'

// It's not clear to me how to trigger updates to the UI
const useForceUpdate = () => useState()[1];


export default function Uploader() {

    const dbx = new Dropbox({
        accessToken: '1h4MKn2TgCAAAAAAAAABYwuiXzG-l9ibyJrPECgCr7Dhe5z2awWbNTK0xjJN37OE',
        fetch
    })

    dbx.filesUpload({
        path: "/test.txt",
        mode: "add",
        autorename: true,
        mute: false,
        strict_conflict: false
    })

    // const inputFile = useRef(null)

    // const onButtonClick = () => {
    //     //current` points to the mounted file input element
    //     inputFile.current.click();
    //     console.log(inputFile)
    // };


    const fileInput = useRef(null);
    const forceUpdate = useForceUpdate();
  
    useEffect(e => {
      window.addEventListener("keyup", clickFileInput);
      return () => window.removeEventListener("keyup", clickFileInput);
    });
  
    function clickFileInput(e) {
      if (fileInput.current.nextSibling.contains(document.activeElement)) {
        // Bind space to trigger clicking of the button when focused
        if (e.keyCode === 32) {
          fileInput.current.click();
        }
      }
    }
  
    function onSubmit(e) {
      e.preventDefault();
      const data = new FormData(fileInput.current.files);
      console.log(data)
    }
  
    function fileNames() {
      const { current } = fileInput;
  
      if (current && current.files.length > 0) {
        let messages = [];
        for (let file of current.files) {
          messages = messages.concat(<p key={file.name}>{file.name}</p>);
        }
        return messages;
      }
      return null;
    }

    return (
        <div className="upload-container">
            press the button to upload to dropbox
            <br/>

            <form onSubmit={onSubmit}>
                <input
                    id="file"
                    type="file"
                    ref={fileInput}
                    // The onChange should trigger updates whenever
                    // the value changes?
                    // Try to select a file, then try selecting another one.
                    onChange={forceUpdate}
                    multiple/>
                <label htmlFor="file">
                <span tabIndex="0" role="button" aria-controls="filename">
                    Upload file(s):{" "}
                </span>
                </label>
                {fileNames()}
                <br />
                <button type="submit">Submit</button>
            </form>


            {/* <button onClick={onButtonClick}>
                <FontAwesomeIcon icon="upload" pull="left"/>Upload to dropbox
            </button>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/> */}
        </div>
    )
}
