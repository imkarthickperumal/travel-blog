import { Stack, Typography } from "@mui/material";
// import Image from "next/legacy/image";
import Image from "next/image";
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
  console.log(paths);
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
  const { title, brief, contentImage, attractions, description } = trip.fields;
  return (
    <Stack spacing={5}>
      <Image
        src={`https:${contentImage.fields.file.url}`}
        alt="Content Image"
        width={1200}
        height={600}
        layout="responsive"
      />
      <Stack spacing={2}>
        <Typography varient="h4" fontWeight="bold">
          {title}
        </Typography>
        <Typography varient="h6" color="#7c7f7c">
          {brief}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TripDetail;
