import React, {FC, useEffect, useState} from 'react';
import {Button} from "@mui/material";
import ImagePreview from "./ImagePreview";
import {StepProps} from "./types";

const ImageStep: FC<StepProps> = ({setIsCurrentFormValid, setImage}) => {
  const [fileName, setFileName] = useState<string>('')
  const [previewUrl, setPreviewUrl] = useState<string>('')


  const handleInputChange = (e: FileList) => {
    if (setImage) {
      setImage(e[0])
    }
    setFileName(e[0].name)
    setPreviewUrl(URL.createObjectURL(e[0]))
  }

  useEffect(() => {
    setIsCurrentFormValid(!!fileName)
  }, [fileName])

  return (
    <>
      <ImagePreview previewUrl={previewUrl}/>
      <Button
        variant="contained"
        component="label"
      >
        Choose file
        <input
          type="file"
          hidden
          onChange={(e) => handleInputChange(e.target.files as FileList)}
        />
      </Button>
    </>
  );
};

export default ImageStep;
