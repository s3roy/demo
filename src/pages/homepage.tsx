import { TextField, Box, Button } from '@mui/material';

const Homepage = () => {
  return (
    <Box position="relative" height="100vh">
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        {/* <Image src={'hi'} alt={'hi'} height={50} width={50} /> */}
      </div>
      <Box display="flex" justifyContent="flex-end" border>
        <div>
          <h1>Teach anytime,anywhere!</h1>

          <div>
            <div>
              <label>First Name</label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </div>

            <div>
              <label>Last Name</label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </div>

            <div>
              <label>Last Name</label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </div>
            <div>
              <label>Last Name</label>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </div>

            <Button variant="outlined" color="secondary">
              Sign Up
            </Button>

            <div>
              <p>Already have an account?</p>Login
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Homepage;
