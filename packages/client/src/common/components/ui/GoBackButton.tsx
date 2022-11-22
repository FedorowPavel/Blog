import { ArrowLeft } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return <Button onClick={handleGoBack} variant="text" startIcon={<ArrowLeft />}>Go Back</Button>;
};

export default GoBackButton;
