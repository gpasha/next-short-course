import { useRouter } from "next/router";
import { MainContainer } from "../../components/MainContainer";

export default function({user}) {
  const { query } = useRouter();
  return (
    <MainContainer keywords={user.name}>
      <h1>User c ID = {query.id}</h1>
      <div>User name is {user.name}</div>
    </MainContainer>
  )
}

export async function getServerSideProps({query}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`)
  const user = await response.json()
  return {
    props: {user}, // will be passed to the page component as props
  }
}