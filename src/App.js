import React from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: 'none !important',
  color: theme.palette.text.secondary,
}));

class App extends React.Component {

 



    state = {
      fullName: "Lorem Ipsum",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      profession:"web developer",
      imgSrc: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
      status: true,
      date: new Date()
      };
    
    handleClick=()=> {
      this.setState({status:!this.state.status})
    }
   componentDidMount() {
    this.timerID = setInterval(
      () =>this.setState({
          date: new Date()
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  
  render() {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
               <Item></Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
               <Box sx={{ maxWidth: 375 }}>
                  <Card variant="outlined">
                      <h2>{this.state.date.toLocaleTimeString()}.</h2>
                  </Card>
                </Box>
            </Item>
            </Grid>
            <Grid item xs={4}>
               <Item></Item>
            </Grid>

          </Grid>
      </Box>
          {this.state.status ? 
          (  

            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item></Item>
        </Grid>
        <Grid item xs={4}>
          <item>

<Box sx={{ maxWidth: 375 }}>
      <Card variant="outlined">
           <img src={this.state.imgSrc} alt="profile" style={{width:"100%"}} />
          <p>{this.state.fullName}</p>
          <p>{this.state.bio}</p>
          <p>{this.state.profession}</p></Card>
    </Box>
    </item>
    </Grid>

    <Grid item xs={4}>
          <Item></Item>
    </Grid>



    </Grid>
    </Box>)
        : 
     (   <div></div>)
      }
      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
              <Grid item xs={4} style={{border: "none !important"}} >
                 <Item style={{border: "none !important"}}></Item>
              </Grid>
              <Grid item xs={4}>
                  <Item>
                  <button onClick={this.handleClick} style={{width: "100%",background: "#898686",border: "#898686",padding: 12,color: "#fff",textTransform: "uppercase", fontSize: 17, fontWeight: 600}}> Display profile</button>

                  </Item>
              </Grid>   

                <Grid item xs={4}>
                   <Item></Item>
                </Grid>
          </Grid>
       </Box>

   </div>

  );
  }
}

export default App;




