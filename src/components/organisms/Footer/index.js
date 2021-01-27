import styled from 'styled-components'
import NavigationList from '../../molecules/NavigationList'
import Typography from '../../atoms/Typography'
import MobileAppBadges from '../../molecules/MobileAppBadges'

const Container = styled.footer`
  top: 0;
  left: 0;
  display: grid;
  background: white;
  grid-template-rows: 82px 68px;
  justify-content: space-between;
  max-height: 150px;
  width: 100%;
  div:first-child {
    border-bottom: 1px #eaeaea solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98vw;
    nav {
    }
  }
  div:first-child + div {
    display: flex;
    justify-content: space-between;
    margin-top: -0.75rem;
    padding-right: 0.5rem;
  }
`

const WantFreeFoodContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  h1 {
    padding-right: 2rem;
  }
  div {
  }
`

const Footer = ({ bottomList, infoList, items, itemsSocial }) => (
  <Container>
    <div>
      <NavigationList items={bottomList} color="white" />
      <WantFreeFoodContainer>
        <Typography
          tag="h1"
          h2
          size={{ sm: '1rem', md: '1.5rem' }}
          color="#110403">
          Download now
        </Typography>
        <MobileAppBadges items={items} direction="horizontal" />
      </WantFreeFoodContainer>
    </div>
    <div>
      <NavigationList items={infoList} color="white" small />
    </div>
  </Container>
)

export default Footer
