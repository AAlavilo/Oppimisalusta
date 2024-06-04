import React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const resetStyles = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
};
export default function Footer() {
    return (
        
            <Box sx={{ position:'fixed', left:0, bottom: 0, width: '100vw', height: '6vh', backgroundColor: "#1976d2", display: 'flex', alignItems: 'center', boxShadow: 20 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', fontSize: 100, px: 10 }}>VILO</Typography>
                    <InstagramIcon style={{ color: 'white', fontSize: 100 }} />
                    <LinkedInIcon style={{ color: 'white', fontSize: 100 }} />
                </Box>
                <Box sx={{ flexGrow: 1, textAlign: 'center', fontSize: 80 }}>
                    <a href="/yhteystiedot" style={{ color: 'white', textDecoration: 'none', marginRight: '60px' }}>Yhteystiedot</a>
                    <a href="/tietosuojakaytanto" style={{ color: 'white', textDecoration: 'none', marginRight: '60px' }}>Tietosuojakäytäntö</a>
                    <a href="/copyright" style={{ color: 'white', textDecoration: 'none' }}>Copyright</a>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
            </Box>
        
    )
}