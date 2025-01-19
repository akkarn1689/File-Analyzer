import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import FileUpload from './components/FileUploads';
import PreviewArea from './components/PreviewArea';

const App = () => {
  const [file, setFile] = useState(null);
  const [extractedData, setExtractedData] = useState(null);

  const handleFileUpload = async (uploadedFile) => {
    setFile(uploadedFile);
    
    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setExtractedData(data.data);
    } catch (error) {
      console.error("Error extracting text:", error);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', width: '100vw', bgcolor: 'grey.50', py: 4 }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Social Media Content Analyzer
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Upload your content and get detailed insights instantly
          </Typography>
        </Box>
        
        <FileUpload onFileUpload={handleFileUpload} />
        <PreviewArea file={file} extractedData={extractedData} />
      </Container>
    </Box>
  );
};

export default App;