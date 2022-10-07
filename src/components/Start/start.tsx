import { Link } from 'react-router-dom';
import './start.scss';
import Logo from 'assets/star-wars.png';
import { Labels } from 'app-constants';
import { Box, Grid, Typography } from '@mui/material';

const Start = () => {
  return (
    <Grid container className="start">
      <Grid container>
        <Box component="span">{Labels.projectTitle}</Box>
        <Box component="img" src={Logo} alt="logo" />
        <Box component="span">
          <Typography>{Labels.author}</Typography>
        </Box>
      </Grid>
      <Grid container>
        <Link className="start__play" to="/game">
          {Labels.buttonStart}
        </Link>
      </Grid>
    </Grid>
  );
};

export default Start;
