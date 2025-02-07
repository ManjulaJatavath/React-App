
import { Container, Button,Grid } from '@mui/material';
const ResponsiveGridButtons = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>First Name</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>Middle Name</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>Last Name</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ResponsiveGridButtons
