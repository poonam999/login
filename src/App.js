import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.scss';

function App() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <div className="container_white">
        <div className="container_padding">
          <h3 className='container_title'>Back to Your Digital Life</h3>
          <p className='container_para'>Choose One of the option to go</p>
          <div className='input_card'>
          <TextField 
              className="input"
              id="outlined-basic"
              label="Email"
              variant="outlined" />
            <TextField 
              className="input"
              id="outlined-basic"
              label="Password"
              type= "password"
              variant="outlined" />
          </div>

          <div  className='line'>
            <p className='line_para'>Or Continue with</p>
          </div>

          <div className='social_card'>
            <div className='google'>
              <img className='social_img' alt="" src="/google_img.png" />
            </div>

            <div className='google'>
              <img className='social_img' alt="" src="/meta_img.png" />
            </div>

            <div className='google'>
              <img className='social_img' alt="" src="/apple_img.png" />
            </div>
          </div>

          <div className='card_button'>
             <button className='button-28'>Login</button>
          </div>
        </div>
      </div>
    </Box>
    
  );
} 

export default App;
