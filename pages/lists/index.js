import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// export const getServerSideProps = async ({ query: { page = 1 } }) => {
//   const response = await fetch(
//     `https://uat.chhatt.com/api/properties?page=${page}`
//   )

//   const resData = await response.json()
//   const propertyData = resData.data
// console.log(resData.data)

//   return {
//     props: {
//       propertyData,
//       page: parseInt(page, 10),
//     },
//   }
// }

const List = (props) => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  console.log(page)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://uat.chhatt.com/api/properties?page=${page}`
      )

      const resData = await response.json()
      const propertyData = resData.data
      console.log(propertyData)
      setData(propertyData)
      console.log(data)
    }

    fetchData()
  }, [page])

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo itaque natus
      soluta placeat quia veniam debitis velit quasi nostrum quaerat vitae autem
      eius veritatis, sequi ratione eaque repellendus? Optio quod earum
      explicabo dicta officia quas voluptatibus vitae cupiditate ipsa. Quos
      ullam corrupti dignissimos neque ratione explicabo ab iste aut voluptas.
      <div>
        {data.map((property) => {
          // console.log(property)
          return (
            <div key={property.id}>
              <Link href={`/lists/${property.id}`}>
                <a>
                  <Image
                    src={property.images[0].original}
                    width={150}
                    height={150}
                    alt='Picture of the author'
                  />
                  <p>{property.area_two_name}</p>
                  <p>{property.area_one_name}</p>
                  <p>{property.area_two_name}</p>
                  <p>{property.address}</p>
                  <p>{property.price}</p>
                  <p>{property.size}</p>
                  <p>{property.id}</p>
                  <p>{property.user_id}</p>
                  <p>{property.short_price}</p>
                  <p>{property.size_type}</p>
                  <p>{property.area_type}</p>
                  <p>{property.property_type}</p>
                  <p>{property.property_for}</p>
                  <p>{property.bed}</p>
                  <p>{property.description}</p>
                  <p>{property.longitude}</p>
                  <p>{property.latitude}</p>
                  <p>{property.latlong}</p>
                  <p>{property.created_at}</p>
                  <p>{property.updated_at}</p>
                  <p>{property.user.name && property.user.name}</p>
                  <p>{property.user.phone}</p>
                  <p>{property.user.email}</p>
                  <p>{property.user.role}</p>
                  <p>{property.user.created_at}</p>
                  <p>{property.user.properties}</p>
                  <p>{property.user.agent.agency_name}</p>
                  <p>{property.user.agent.id}</p>
                  <p>{property.user.agent.agency_address}</p>
                  <p>{property.user.agent.contact}</p>
                  <p>{property.user.agent.email}</p>
                  <p>{property.user.agent.firebase_id}</p>
                </a>
              </Link>
            </div>
          )
        })}
      </div>
      {[1, 2, 3, 4, 5, 6].map((currentPage) => (
        <Link key={currentPage} href={`/lists?page=${currentPage}`}>
          <button onClick={() => setPage(currentPage)}>{currentPage}</button>
        </Link>
      ))}
    </div>
  )
}

export default List
