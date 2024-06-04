import NavigationBar from "./NavigationBar"
import Footer from "./footer";
import { Box, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';



export default function UserScreen() {
    return (
        <>
            <Box sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <NavigationBar />
                <Box sx={{ height: '100vh', width: '80vw', backgroundColor: "#404040", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ minHeight: '100%', minWidth: '60%', display: 'flex', flexDirection: 'column', alignItems: "flex-start", px: '40px' }}>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ fontSize: 100, color: "white", pt: '200px' }} // Add padding-left to move it a bit from the edge
                        >
                            Olli Opettaja
                        </Typography>
                       
                        <a href="/settings">
                            <SettingsIcon sx={{ color: "white", fontSize: 100, pt: '20px' }} />
                        </a>
                        <Typography
                            variant="h2"
                            sx={{ fontSize: 60, color: "white", backgroundColor:"#686868", border: '2px solid black', minWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pl: '20px', pb: '20px' }} 
                        >
                            <h4>Käyttäjätiedot</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ marginRight: '10px' }}>oskari.opettaja@sahkoposti.com</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ marginRight: '10px' }}>puh. +358358358588</span>
                                </div>
                                <div>Lehtori, tieto- ja viestintätekniikka</div>
                            </div>
                        </Typography>
                        <Box sx={{ backgroundColor:"#686868", border: '2px solid black', minWidth: '100%', minHeight:'1080px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pl: '20px', pb: '20px', marginTop:'40px'}}>
                        <Typography
                        variant="h2"
                        sx={{ fontSize: 60, color: "white", fontWeight:'bold', pt:'20px'}} 
                        >
                            Kurssit
                        </Typography>
                        </Box>
                    </Box>
                </Box>
                <Footer />
            </Box>
        </>
    );
}
