import React, {FC, useEffect, useState} from 'react';
import {Button} from "@mui/material";
import ImagePreview from "./ImagePreview";
import {StepProps} from "./types";

const ImageStep: FC<StepProps> = ({setIsCurrentFormValid, setImage}) => {
  const [file, setFile] = useState<string>('')
  const [previewUrl, setPreviewUrl] = useState<string>('')


  const handleInputChange = (e: FileList) => {
    if (setImage) {
      setImage(e)
    }
    setFile(e[0].name)
    setPreviewUrl(URL.createObjectURL(e[0]))
  }

  useEffect(() => {
    setIsCurrentFormValid(!!file)
  }, [file])

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
