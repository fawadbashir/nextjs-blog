import Image from 'next/image'
import { useRouter } from 'next/router'

// export const getStaticPaths = async (context) => {
//   const page = context.page

//   const response = await fetch(`https://uat.chhatt.com/api/properties`)
//   const resData = await response.json()

//   const paths = resData.data.map((propertyData) => {
//     return {
//       params: {
//         id: propertyData.id.toString(),
//         page,
//       },
//     }
//   })

//   return {
//     paths,
//     fallback: false,
//   }
// }

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://uat.chhatt.com/api/properties/${params.id}`
  )
  const resData = await response.json()
  // console.log(resData.results)
  // const resultItem = resData.data.find((property) => params.id === property.id)
  const data = resData.data
  return {
    props: {
      data,
    },

    // will be passed to the page component as props
  }
}

const List = ({ data }) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <></>
  }
  // console.log(props.data)

  // const myLoader = () => {
  //   return `https://icons8.com/preloaders/img/favicons/favicon-194x194.png`
  // }

  return (
    <div>
      {data.images.map((prev, i) => {
        return (
          <div key={i}>
            <Image
              src={prev.original}
              width={150}
              height={150}
              alt='Picture of the author'
              // loader={myLoader}
            />
          </div>
        )
      })}

      <p>{data.area_two_name}</p>
      <p>{data.area_one_name}</p>
      <p>{data.area_two_name}</p>
      <p>{data.address}</p>
      <p>{data.price}</p>
      <p>{data.size}</p>
      <p>{data.id}</p>
      <p>{data.user_id}</p>
      <p>{data.short_price}</p>
      <p>{data.size_type}</p>
      <p>{data.area_type}</p>
      <p>{data.property_type}</p>
      <p>{data.property_for}</p>
      <p>{data.bed}</p>
      <p>{data.description}</p>
      <p>{data.longitude}</p>
      <p>{data.latitude}</p>
      <p>{data.latlong}</p>
      <p>{data.created_at}</p>
      <p>{data.updated_at}</p>
      <p>{data.user.name}</p>
      <p>{data.user.phone}</p>
      <p>{data.user.email}</p>
      <p>{data.user.role}</p>
      <p>{data.user.created_at}</p>
      <p>{data.user.properties}</p>
      <p>{data.user.agent.agency_name}</p>
      <p>{data.user.agent.id}</p>
      <p>{data.user.agent.agency_address}</p>
      <p>{data.user.agent.contact}</p>
      <p>{data.user.agent.email}</p>
      <p>{data.user.agent.firebase_id}</p>
    </div>
  )
}

export default List
