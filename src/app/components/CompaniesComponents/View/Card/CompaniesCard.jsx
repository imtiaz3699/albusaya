import { DoneOutline } from '@mui/icons-material'
import { Box, Card, Typography } from '@mui/material'
import React from 'react'

function CompaniesCard({d}) {
  return (
    <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              width: "100%",
            }}
          >
            {d.map((element, idx) => (
              <Box
                style={{ maxWidth: "381px", width: "100%" }}
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "381px",
                  width: "100%",
                }}
              >
                <Card
                  sx={{
                    backgroundColor: element.color,
                    width: "100%",
                    borderRadius: "25px",
                    paddingY: "20px",
                    paddingX: "30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "6px",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          borderRadius: "50%",
                          border: `1px solid ${element.color}`,
                          width: "21px",
                          height: "21px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <DoneOutline
                          sx={{
                            color: element.color,
                            width: "10px",
                            height: "10px",
                          }}
                        />
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ color: "white" }}>
                      {element.name}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{ color: "white", textAlign: "end" }}
                  >
                    {element.count}
                  </Typography>
                </Card>
              </Box>
            ))}
          </Box>
  )
}

export default CompaniesCard