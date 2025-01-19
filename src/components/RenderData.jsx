import React from 'react';
import { Box, Typography } from '@mui/material';

const RenderData = ({ data, level = 0 }) => {
  if (typeof data === "object" && data !== null) {
    if (Array.isArray(data)) {
      return (
        <Box sx={{ pl: level * 2 }}>
          {data.map((item, index) => (
            <Box key={index} sx={{ py: 0.5 }}>
              <RenderData data={item} level={level + 1} />
            </Box>
          ))}
        </Box>
      );
    } else {
      return (
        <Box sx={{ pl: level * 2 }}>
          {Object.entries(data).map(([key, value]) => (
            <Box key={key} sx={{ py: 0.5 }}>
              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                {key}:{' '}
              </Typography>
              <RenderData data={value} level={level + 1} />
            </Box>
          ))}
        </Box>
      );
    }
  } else {
    return (
      <Typography component="span" color="text.secondary">
        {data}
      </Typography>
    );
  }
};

export default RenderData;