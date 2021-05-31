// export async function getServerSideProps() {
//   // const response = await fetch('https://randomuser.me/api/?results=1')
//   // const resData = await response.json()

//   console.log(resData.results)
//   return {
//     props: {
//       results: resData.results,
//     }, // will be passed to the page component as props
//   }
// }

const Home = (props) => {
  return (
    <div>
      {/* {props.results.map((result) => (
        <>
          <p>{result.gender}</p>
          <span>
            {result.name.first} {result.name.last}
          </span>
        </>
      ))} */}
    </div>
  )
}

export default Home
