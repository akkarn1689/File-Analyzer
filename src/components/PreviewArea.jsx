import React from 'react';
import { Box, Paper, Typography, Alert } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import DataObjectIcon from '@mui/icons-material/DataObject';
import RenderData from './RenderData';

const PreviewArea = ({ file, extractedData }) => {
  return (
    <Box sx={{ 
      display: 'grid', 
      gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, 
      gap: 3, 
      mt: 4 
    }}>
      {/* File Preview */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <DescriptionIcon />
          <Typography variant="h6">File Preview</Typography>
        </Box>
        <Box
          sx={{
            minHeight: 400,
            bgcolor: 'grey.50',
            borderRadius: 1,
            p: 2,
            border: '1px solid',
            borderColor: 'grey.200',
          }}
        >
          {file ? (
            file.type === "application/pdf" ? (
              <object
                data={URL.createObjectURL(file)}
                type="application/pdf"
                style={{ width: '100%', height: 400 }}
              >
                <Alert severity="error">
                  PDF preview is not supported in this browser.
                </Alert>
              </object>
            ) : (
              <Box
                component="img"
                src={URL.createObjectURL(file)}
                alt="Uploaded file preview"
                sx={{
                  maxWidth: '100%',
                  maxHeight: 400,
                  objectFit: 'contain',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            )
          ) : (
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'text.secondary',
              }}
            >
              No file uploaded yet
            </Box>
          )}
        </Box>
      </Paper>

      {/* Extracted Data */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <DataObjectIcon />
          <Typography variant="h6">Analyzed Content</Typography>
        </Box>
        <Box
          sx={{
            height: 400,
            bgcolor: 'grey.50',
            borderRadius: 1,
            p: 2,
            border: '1px solid',
            borderColor: 'grey.200',
            overflowY: 'auto',
          }}
        >
          {extractedData ? (
            <RenderData data={extractedData} />
          ) : (
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'text.secondary',
              }}
            >
              No data extracted yet
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default PreviewArea;