import React from "react";
import client from "./../../config/contentful";

export const getStaticPaths = async () => {
  const response = await client.getEntries({
    content_type: "trips",
  });
  // {props : {slug:val}}
  const paths = response.items.map((trip) => {
    return {
      params: {
        slug: trip.fields.slug,
      },
    };
  });
  console.log("Paths");
  console.log(Paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log("Params");
  console.log(params);
  const response = await client.getEntries({
    content_type: "trips",
    "fields.slug": params.slug,
  });
  return {
    props: {
      trip: response.items[0],
    },
  };
};

const TripDetail = ({ trip }) => {
  console.log(trip);
  return <div>TripDetail Page</div>;
};

export default TripDetail;
