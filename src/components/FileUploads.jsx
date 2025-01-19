import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile && (uploadedFile.type === "application/pdf" || uploadedFile.type.startsWith("image/"))) {
      setFile(uploadedFile);
      onFileUpload(uploadedFile);
    }
  };

  const handleChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      onFileUpload(uploadedFile);
    }
  };

  return (
    <Paper
      elevation={dragActive ? 3 : 1}
      sx={{
        position: 'relative',
        border: '2px dashed',
        borderColor: dragActive ? 'primary.main' : 'grey.300',
        bgcolor: dragActive ? 'primary.50' : 'background.paper',
        p: 4,
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          borderColor: 'primary.light',
        },
      }}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0,
          cursor: 'pointer',
        }}
        onChange={handleChange}
        accept="application/pdf,image/*"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            backgroundColor: 'grey.100',
            borderRadius: '50%',
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CloudUploadIcon sx={{ fontSize: 40, color: 'grey.600' }} />
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            {file ? `Selected: ${file.name}` : 'Drop your file here'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Support for PDF and image files
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default FileUpload;