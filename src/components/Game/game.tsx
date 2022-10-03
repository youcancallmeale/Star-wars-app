import { usePlanet } from 'hooks/usePlanet';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { Labels } from 'app-constants';
import ErrorComponent from 'components/ErrorComponent/ErrorComponent';
import Loading from 'components/Loading/Loading';

const Game = () => {
  const { data, isLoading, isError, refetch, isRefetching } = usePlanet();

  if (isLoading || isRefetching) {
    return <Loading />;
  }

  if (isError) {
    return (
      <>
        <Loading />
        <ErrorComponent />
      </>
    );
  }

  return (
    <Box sx={{ maxWidth: 400, minWidth: 400, margin: 'auto' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h1" sx={{ fontSize: 14 }}>
            {Labels.planetTitle}
          </Typography>
          <Typography variant="h2">{data?.name}</Typography>
          <List>
            <ListItem disablePadding>
              <ListItemText
                primary={`${Labels.population}: ${data?.population}`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary={`${Labels.climate}: ${data?.climate}`} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary={`${Labels.terrain}: ${data?.terrain}`} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary={`${Labels.featureInFilms}: ${data?.films?.length}`}
              />
            </ListItem>
          </List>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => refetch()}>
            {Labels.buttonNtx}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Game;
