import Anchor from "../components/Anchor/Anchor"
import Layout from "../components/Layout/Layout"

export default function Home() {
  return (
    <Layout
      arrayAnchorMenuOptinal={
        [
          <Anchor key={0} description='Sign Up' direction='/signup' />,
          <Anchor key={1} description='Login' direction='/login' />
        ]
      }
    >

    </Layout>
  )
}