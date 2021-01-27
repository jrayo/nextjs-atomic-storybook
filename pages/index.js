import Head from 'next/head'
import styled from 'styled-components'
import Header from '../src/components/organisms/Header'
import Footer from '../src/components/organisms/Footer'
import itemsJson from '../src/components/organisms/Header/items.json'
import itemsList from '../src/components/molecules/NavigationList/data.json'

const Container = styled.div`
  width: auto;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Production Ready Sites</title>
      </Head>
      <Container>
        <Header navigationItems={itemsJson.items} />
        <Footer
          bottomList={itemsList.bottomList}
          infoList={itemsList.infoList}
          items={itemsList.items}
          itemsSocial={itemsList.itemsSocial}
        />
      </Container>
    </>
  )
}
