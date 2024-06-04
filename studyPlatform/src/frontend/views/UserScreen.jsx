import NavigationBar from "../components/NavigationBar"
import Footer from "../components/footer";
import { Box, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';



export default function UserScreen() {
    return (
        <>
        <NavigationBar />
            <Box sx={{
                height: '90vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "flex-start",
                alignItems: 'center',
                backgroundColor: "burlywood",
                
            }}>
                
                    <Box sx={{ minHeight: '100%', minWidth: '60%', display: 'flex', flexDirection: 'column', alignItems: "center", px: '40px', backgroundColor: "burlywood" }}>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ fontSize: 40, color: "black", backgroundColor: "burlywood"}} // Add padding-left to move it a bit from the edge
                        >
                            Olli Opettaja
                        </Typography>
                       
                        <a href="/settings">
                            <SettingsIcon sx={{ color: "white", fontSize: 100, pt: '20px' }} />
                        </a>
                        <Typography
                            variant="h2"
                            sx={{ fontSize: 20, color: "white", backgroundColor:"#686868", border: '2px solid black', minWidth: '60%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pl: '20px', pb: '20px' }} 
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
                        <Box sx={{ backgroundColor:"#686868", border: '2px solid black', minWidth: '60%', minHeight:'40%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pl: '20px', pb: '20px', marginTop:'40px'}}>
                        <Typography
                        variant="h2"
                        sx={{ fontSize: 20, color: "white", fontWeight:'bold', pt:'20px'}} 
                        >
                            Kurssit
                        </Typography>
                        </Box>
                    </Box>
                
            </Box>
            <Footer />
        </>
    );
}
