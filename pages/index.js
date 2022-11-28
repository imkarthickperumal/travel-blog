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
    <Grid container spacing={2}>
      {trips &&
        trips.map((trip) => {
          return (
            <Grid item key={trip.sys.id}>
              <TripCard />
            </Grid>
          );
        })}
    </Grid>
  );
}
