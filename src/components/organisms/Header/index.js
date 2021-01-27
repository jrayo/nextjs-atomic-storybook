import styled from 'styled-components'
import NavigationList from '../../molecules/NavigationList'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'

const Container = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 10;

  & {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

`

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`

const Header = ({ navigationItems }) => (
  <Container>
    <LeftSide>
      <img src="/images/nextjs-logo.png" alt="logo" width="40px" />

      <Button tertiary icon="user">
        Login
      </Button>
    </LeftSide>
    <NavigationList items={navigationItems} color="white" />
    <div>

      <Icon name="shoppingCart" color="white" />
    </div>
  </Container>
)

Header.defaultProps = {}

export default Header
