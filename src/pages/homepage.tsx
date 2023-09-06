import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import Logo from '@/logo.jpeg';
import Image from 'next/image';

const backgroundImageStyle = {
  backgroundImage: 'url(/bg.jpg)',
};

const labelStyles = {
  fontWeight: 'bold',
  color: 'GrayText',
  ml: 1,
};

const info = ['Email', 'Mobile', 'Password'];

const Homepage = () => {
  const renderLabel = (text: string) => (
    <Typography variant="overline" {...labelStyles}>
      {text}
    </Typography>
  );

  return (
    <Grid
      container
      style={backgroundImageStyle}
      justifyContent="flex-end"
      alignItems="center"
    >
      <Paper
        sx={{
          width: { xs: '100vw', lg: '50vw' },
          marginY: { xs: '10vh', lg: '0vh' },
          height: { xs: '85vh', lg: '100vh' },
          borderRadius: { xs: '40px', xl: '40px 0px 0px 40px' },
        }}
      >
        <Grid
          display="flex"
          justifyContent={{ xs: 'center', lg: 'end' }}
          my={{ xs: 2, lg: 5 }}
          mr={5}
        >
          <Image src={Logo} alt="logo" width={50} height={50} />
        </Grid>

        <Box mx={{ xs: 2, sm: 4, md: 8, lg: 18 }}>
          <Grid container justifyContent="center">
            <Typography variant="h4" fontWeight="bold">
              Teach anytime, anywhere!
            </Typography>
          </Grid>

          <Grid
            display="flex"
            justifyContent="space-between"
            mt={{ xs: 0.5, lg: 2 }}
          >
            <Stack mr={2}>
              {renderLabel('First Name')}
              <TextField type="text" />
            </Stack>
            <Stack>
              {renderLabel('Last Name')}
              <TextField type="text" />
            </Stack>
          </Grid>

          {info.map((label) => (
            <Grid key={label} mt={{ xs: 0.5, lg: 2 }}>
              <Stack>
                {renderLabel(label)}
                <TextField type={label.toLowerCase()} />
              </Stack>
            </Grid>
          ))}

          <Grid mt={{ xs: 0.5, lg: 2 }}>
            <Button
              variant="contained"
              fullWidth
              style={{ background: 'violet' }}
              sx={{ borderRadius: '10px' }}
            >
              Sign Up
            </Button>
          </Grid>

          <Grid display="flex" justifyContent="center" mt={{ xs: 0.5, lg: 2 }}>
            <Typography mr={1}>Already have an account?</Typography>
            <Link href="#"> Login</Link>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Homepage;
