import { usePlanet } from 'hooks/usePlanet';
import '../../assets/styles.scss';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { Labels } from 'app-constants';
import ErrorComponent from 'components/ErrorComponent/ErrorComponent';
import Loading from 'components/Loading/Loading';
import { numberFormat } from 'utils/numberFormat';

const CardGame = () => {
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
    <Box
      sx={{
        maxWidth: 400,
        minWidth: 400,
        margin: 'auto',
      }}
    >
      <Card>
        <CardHeader
          title={data?.name}
          subheader={Labels.planetTitle}
          sx={{
            bgcolor: '#ffe81f',
          }}
        />
        <CardContent sx={{ height: '100%' }}>
          <List>
            <Divider>
              <Typography variant="body2">{Labels.population}</Typography>
            </Divider>
            <ListItem disablePadding sx={{ padding: 2 }}>
              <Typography sx={{ fontWeight: 'bold' }}>
                {numberFormat(data.population)}
              </Typography>
            </ListItem>

            <Divider>
              <Typography variant="body2">{Labels.climate}</Typography>
            </Divider>
            <ListItem disablePadding sx={{ padding: 2 }}>
              <Typography sx={{ fontWeight: 'bold' }}>
                {data?.climate}
              </Typography>
            </ListItem>

            <Divider>
              <Typography variant="body2">{Labels.terrain}</Typography>
            </Divider>
            <ListItem disablePadding sx={{ padding: 2 }}>
              <Typography sx={{ fontWeight: 'bold' }}>
                {data?.terrain}
              </Typography>
            </ListItem>

            <Divider>
              <Typography variant="body2">{Labels.featureInFilms}</Typography>
            </Divider>
            <ListItem disablePadding sx={{ padding: 2 }}>
              <Typography sx={{ fontWeight: 'bold' }}>
                {data?.films?.length}
              </Typography>
            </ListItem>
          </List>
        </CardContent>
        <CardActions
          sx={{ justifyContent: 'center', bgcolor: '#ffe81f', mt: 2 }}
        >
          <Button
            size="large"
            onClick={() => refetch()}
            sx={{ color: 'black' }}
          >
            {Labels.buttonNtx}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardGame;
