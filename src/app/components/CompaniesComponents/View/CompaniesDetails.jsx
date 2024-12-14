import { Box, Card, Divider, Typography } from '@mui/material'
import React from 'react'

function CompaniesDetails({userData}) {
  return (
    
        <Card
          sx={{
            backgroundColor: "#062A47",
            borderRadius: "25px",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3 }}>
            <Box
              sx={{
                width: "66px",
                height: "66px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src="/icon1.png"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Typography variant="h6" sx={{ color: "white" }}>
              AL-BUSAYRA
            </Typography>
          </Box>

          <Divider />
          <Box>
            {Object.entries(userData).map(([key, value]) => (
              <Box
                key={key}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  py: 2,
                  px: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFFB2",
                    fontSize: "13px",
                    fontWeight: "medium",
                  }}
                >
                  {key}
                </Typography>
                <Typography
                  sx={{
                    color: "#FFFFFFE5",
                    fontSize: "13px",
                    fontWeight: "medium",
                  }}
                >
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Card>
    
  )
}

export default CompaniesDetails