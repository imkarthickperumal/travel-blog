import React from 'react'


export const getStaticPaths = async()=>{
  const response = await client.getEntries({
    content_type : 'trips'
  })
  // {props : {slug:val}}
  const paths = response.items.map((trip)=>{
    return{
      params : {
        slug : trip.fields.slug
      }
    }
  })
  return{
    paths,
    fallback: false
  }
} 

const TripDetail = () => {
  return (
    <div>TripDetail Page</div>
  )
}

export default TripDetail