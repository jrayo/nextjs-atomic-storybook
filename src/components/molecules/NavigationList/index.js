import styled from 'styled-components'
import PropTypes, { arrayOf, shape, string } from 'prop-types'
import NavigationItem from '../../atoms/NavigationItem'

const StyledNavigation = styled.nav`
  &,
  ul {
    list-style: none;
    display: flex;
    flex-direction: ${(props) =>
      props.direction !== 'horizontal' ? `column` : undefined};
    padding:0;
    li + li {
      ${({ direction, small, theme }) =>
        // if not small and direction is horizontal
        !small &&
        direction === 'horizontal' &&
        `
          margin-left: ${theme.spacing.s32}};
        `}

      ${({ direction, small, theme }) =>
        // if not small and direction is vertical
        !small &&
        direction !== 'horizontal' &&
        `
          margin-top: ${theme.spacing.s16}};
        `}

      ${({ direction, small }) =>
        // if small and direction is horizontal
        small &&
        direction === 'horizontal' &&
        `
          margin-left: 0.75rem;
        `}

      ${({ direction, small, theme }) =>
        // if small and direction is vertical
        small &&
        direction !== 'horizontal' &&
        `
          margin-top: ${theme.spacing.s8}};
        `}
    }
    
  }
`

const Navigation = ({ direction, items, color, small }) => (
  <StyledNavigation small={small} direction={direction}>
    <ul>
      {items.map((item) => (
        <NavigationItem
          key={item.id && item.id}
          small={small}
          color={color}
          href={item.url}>
          {item.title}
        </NavigationItem>
      ))}
    </ul>
  </StyledNavigation>
)

// Expected prop values
Navigation.propTypes = {
  direction: string,
  items: arrayOf(
    shape({
      title: string.isRequired,
      url: string.isRequired
    })
  ),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  small: PropTypes.bool
}

// Default prop values
Navigation.defaultProps = {
  direction: 'horizontal',
  items: [],
  color: 'white',
  small: false
}

export default Navigation
