import { Box } from '@mui/material'
import React from 'react'
import Logo from "../../assets/Logo.png"
import Typography from '@mui/material/Typography';
import { Button } from '../../Component';
import { useNavigate } from "react-router-dom";


function GetStartScreen() {
    const navigate = useNavigate();
    return (
        <Box sx={
            {
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                justifyContent: "space-around",
                height: "100vh"
            }
        }>
            <Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 3
                }}>
                    <img src={Logo} alt="" width={220} />
                </Box>
                <Box>
                    <Typography variant="h5" gutterBottom sx={{
                        color: 'primary.main',
                        fontWeight: "Bold"
                    }}>
                        SAYLANI WELFARE
                    </Typography>
                    <Typography variant="subtitle2" sx={{
                        marginLeft: 6,
                        color: "secondary.main"
                    }} >
                        ONLINE DISCOUNT STORE
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Button onClick={() => navigate("/login")}  >
                    Get Started
                </Button >
            </Box>
        </Box>
    )
}

export default GetStartScreen
