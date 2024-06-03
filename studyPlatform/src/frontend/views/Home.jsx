import NavigationBar from "../components/NavigationBar";
import { Box, Container, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const NoHoverButton = styled(Button)({
    '&:hover': {
        backgroundColor: 'inherit', // Keeps the background color the same on hover
        boxShadow: 'none',         // Removes any box shadow on hover
        color: 'green',
    },
});

export default function Home() {


    return (
        <>
            <NavigationBar />
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "crimson", height: "100vh", width: "100vw"}}>
                <div >
                    <input type="text" placeholder="Etsi Sivulta" className="navbar-search" />
                </div>
                <div>
                    <Box>
                        <Button sx={{
                            '&:hover': {
                                backgroundColor: 'inherit', // Keeps the background color the same on hover
                                boxShadow: 'none',         // Removes any box shadow on hover
                                color: "green",
                            }
                        }}> Kaikki</Button>
                        <NoHoverButton>Kommentit</NoHoverButton>
                        <Button>Ilmiannot</Button>
                        <Button>Uutiset</Button>
                    </Box>
                    <Box></Box>
                </div>
            </Box >
        </>
    )
}