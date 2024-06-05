import NavigationBar from "../components/NavigationBar"
import Footer from "../components/footer";
import { Box, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect, useState } from "react";
import profilepic from "/src/assets/default_profile_pic.jpg"



export default function UserScreen() {
    const[user, setUser] = useState(null);

    useEffect(() =>{
        const fetchUserData = async () => {
            try {
              const response = await fetch(`http://localhost:3000/api/users/666013ab74dad9fd152f1306`);
              if (!response.ok) {
                console.log('Response not ok:', response);
                throw new Error(`Failed to fetch user data: ${response.status}`);
              }
              console.log('Response:', response);
              const userData = await response.json();
              console.log('user data: ', userData);
              setUser(userData);
            } catch (error) {
              console.error('Error fetching user data:', error);
              setUser(null); 
            }
          };
        fetchUserData();
    }, []);
    if (user === null) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <>
            <NavigationBar />
            <Box
                sx={{
                    height: '90vh',
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "flex-start",
                    alignItems: 'center',
                    backgroundColor: "white",
                }}>
                <Box
                    sx={{
                        height: '100%',
                        width: '60%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: "flex-start",
                        px: '40px',
                        backgroundColor: "white"
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%', 
                            justifyContent: 'space-between' 
                        }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', pt: '20px' }}>
                            <img src={profilepic} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{ fontSize: 40, color: "black", pt:'40px', px:'20px'}} 
                            >
                                {user.firstName} {user.lastName}
                            </Typography>
                        </Box>
                        <a href="/settings" style={{paddingTop:'90px'}}>
                            <SettingsIcon sx={{ color: "black", fontSize: 20}} />
                        </a>
                    </Box>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: 20, color: "white", backgroundColor: "#686868", border: '2px solid black',
                            width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pl: '20px', pb: '20px'
                        }}
                    >
                        <h2 style={{fontSize:'20px'}}>Käyttäjätiedot</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontSize:'16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: '10px' }}>{user.email}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: '10px' }}>puh. +358358358588</span>
                            </div>
                            <div>Lehtori, tieto- ja viestintätekniikka</div>
                        </div>
                    </Typography>
                    <Box sx={{
                        backgroundColor: "#686868", border: '2px solid black', width: '100%', minHeight: '40%', display: 'flex',
                        flexDirection: 'column', alignItems: 'flex-start', pl: '20px', pb: '20px', marginTop: '40px'
                    }}>
                        <Typography
                            variant="h2"
                            sx={{ fontSize: 20, color: "white", fontWeight: 'bold', pt: '20px' }}
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
