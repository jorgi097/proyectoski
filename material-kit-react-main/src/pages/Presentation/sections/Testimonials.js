/*
=========================================================
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Nos esforzamos en ser los mejores, como tu</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679+ entrenamientos
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Miles de entrenamientos diarios
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Evel Lopez"
              date="Hace 1 día"
              review="Siento que ahora el entrenamiento es mas acorde a mi forma de entrenar."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Jessica Aguilar"
              date="Hace 1 semana"
              review="Cada día me siento mas activa y me he fortalecido de gran manera!!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Jorge Enrique"
              date="Hace 3 semanas"
              review="Increible!, una gran pagina que se apega a tu entrenamiento y a tu forma de vida."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
