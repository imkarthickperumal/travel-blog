import Image from "next/image";
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

export default function Home({trips}) {
  console.log(trips);
  return(
    <div>

    </div>
  )
}
