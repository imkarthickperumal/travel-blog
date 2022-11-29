import { Grid } from "@mui/material";
import Image from "next/image";
import TripCard from "../components/TripCard";
import client from "./../config/contentful";

export const getStaticProps = async () => {
  const response = await client.getEntries({
    content_type: "trips",
  });

  return {
    props: {
      trips: response.items,
    },
  };
};

export default function Home({ trips }) {
  console.log(trips);
  return (
    <Grid container spacing={5} my={5}>
      {trips &&
        trips.map((trip) => {
          return (
            <Grid xs={12} sm={6} lg={4} item key={trip.sys.id}>
              <TripCard trip={trip} />
            </Grid>
          );
        })}
    </Grid>
  );
}
