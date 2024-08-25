/*import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SideNav from '../components/sideNavComponent';
import ReactPlayer from 'react-player';
import NavigationBar from '../components/NavigationBar';
import CommentsSection from './CommentsView';
import Footer from '../components/footer';

export default function VideoView({ url }) {
    const [showNotes, setShowNotes] = useState(false);
    const [notes, setNotes] = useState('');

    useEffect(() => {

        const savedNotes = localStorage.getItem('userNotes');
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);
    const comments = [
        { id: 1, author: 'Joku', content: 'hyvähyvä!' },
        { id: 2, author: 'Joku', content: 'jeejeee' },
        { id: 3, author: 'Anonymous', content: 'joojoo' },
    ];
    const handleSaveNotes = () => {

        localStorage.setItem('userNotes', notes);
        alert('Notes saved successfully!');
        setShowNotes(false);
    };

    return (
        <>
            <NavigationBar />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100vw',
                    minHeight: '100vh',
                    backgroundColor: 'white',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        width: '75%',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '40px',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        overflowY: 'auto',
                    }}
                >
                    <Typography
                        sx={{
                            color: 'black',
                            fontSize: '1.5em',
                            fontWeight: 'bold',
                            paddingBottom: '20px',
                        }}
                    >
                        VILO
                    </Typography>
                    <Typography
                        sx={{
                            color: 'black',
                            fontSize: '1em',
                            paddingBottom: '20px',
                        }}
                    >
                        Pitäiskö tässä olla vaikka kurssin nimi?
                    </Typography>

                    <Box
                        sx={{
                            width: '100%',
                            backgroundColor: '#F4F4F4',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <ReactPlayer
                            url={url || './raccoon.mov'}
                            controls={true}
                            width='100%'
                        />
                    </Box>

                    <Box
                        sx={{
                            width: '100%',
                            marginTop: '20px',
                            backgroundColor: 'white',
                            padding: '20px',
                            borderTop: '1px solid #ddd'
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography
                                variant="h6"
                                sx={{ marginBottom: '20px', fontWeight: 'bold' }}
                            >
                                Comments
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => setShowNotes(!showNotes)}
                            >
                                {showNotes ? 'Hide Notes' : 'Show Notes'}
                            </Button>
                        </Box>

                        <CommentsSection comments={comments} />

                        {showNotes && (
                            <Box
                                sx={{
                                    marginTop: '20px',
                                    backgroundColor: '#f7f7f7',
                                    padding: '20px',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px'
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ marginBottom: '10px', fontWeight: 'bold' }}
                                >
                                    Notes
                                </Typography>
                                <textarea
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    rows="8"
                                    style={{ width: '100%', padding: '10px', fontSize: '1em', borderRadius: '4px', border: '1px solid #ccc' }}
                                />
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                                    <Button variant="contained" color="secondary" onClick={handleSaveNotes}>
                                        Save Notes
                                    </Button>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: '25%',
                        backgroundColor: '#f7f7f7',
                        padding: '20px',
                        overflowY: 'auto',
                    }}
                >
                    <SideNav />
                </Box>
            </Box>

            <Footer />
        </>
    );
}*/
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from '../components/footer';
import ReactPlayer from 'react-player';
import NavigationBar from '../components/NavigationBar';
import CommentsSection from './CommentsView';
import SideNav from '../components/sideNavComponent';

export default function VideoView({ url }) {



 
  const comments = [
    { id: 1, author: 'Joku', content: 'hyvähyvä!' },
    { id: 2, author: 'Joku', content: 'jeejeee' },
    { id: 3, author: 'Anonymous', content: 'joojoo' },
  ];

 
  console.log('Comments:', comments);

  return (
    <>
      <NavigationBar />
      {console.log('NavigationBar rendered')}
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',  
          width: '100vw',
          minHeight: '100vh',
          backgroundColor: 'white',
        }}
      >
        {console.log('Main Box rendered')}

        <Box
          sx={{
            width: '75%', 
            display: 'flex',
            flexDirection: 'column',
            padding: '40px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'white',
            overflowY: 'auto',
          }}
        >
          {console.log('Left side (Video and Comments) Box rendered')}
          
          <Typography
            sx={{
              color: 'black',
              fontSize: '1.5em',
              fontWeight: 'bold',
              paddingBottom: '20px',
            }}
          >
            VILO
          </Typography>
          <Typography
            sx={{
              color: 'black',
              fontSize: '1em',
              
              paddingBottom: '20px',
            }}
          >
            Pitäiskö tässä olla vaikka kurssin nimi? 
          </Typography>
          {console.log('Typography rendered')}
          
          <Box
            sx={{
              width: '100%',
              backgroundColor: '#F4F4F4',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
              //height: 'auto',
              boxSizing: 'border-box'
            }}
          >
            {console.log('Video player container rendered')}
            <ReactPlayer
              url={url || 'https://www.youtube.com/watch?v=dvIOvcep1FE'}
              controls={true}
              width='100%'
              
            />
            {console.log('ReactPlayer rendered')}
          </Box>

          <Box
            sx={{
              width: '100%',
              marginTop: '20px',
              backgroundColor: 'white',
              padding: '20px',
              borderTop: '1px solid #ddd'
            }}
          >
            {console.log('Comments section container rendered')}
            <Typography
              variant="h6"
              sx={{ marginBottom: '20px', fontWeight: 'bold' }}
            >
              Comments
            </Typography>
            {console.log('Comments title rendered')}
            <CommentsSection comments={comments} />
            {console.log('CommentsSection component rendered')}
          </Box>
        </Box>

        <Box
          sx={{
            width: '25%', 
            backgroundColor: '#f7f7f7',
            padding: '20px',
            borderLeft: '1px solid #ddd',
            overflowY: 'auto', 
          }}
        >
         
          <SideNav />
        </Box>
        
      </Box>
          <Footer />
    </>
  );
}
