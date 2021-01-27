import styled from 'styled-components'
import PropTypes, { func, string, bool } from 'prop-types'
import Icons from './Icons'

const IconComponent = ({ onClick, noHover, color, name, ...otherProps }) => {
  const Icon = Icons[name]
  if (Icons[name] === undefined) return null

  return (
    <StyledIcon noHover={noHover} color={color} onClick={onClick}>
      <Icon aria-label={`${name} icon`} {...otherProps} />
    </StyledIcon>
  )
}

const StyledIcon = styled.button`
  background: ${(props) => (props.color ? props.color : 'white')};
  border: none;
  padding: 5px;
  &:hover {
    cursor: pointer;
    background: ${({ theme, noHover }) =>
      !noHover && theme.colors.grayishBlueLightest};
  }
  &:focus {
    outline: none;
  }
`

IconComponent.propTypes = {
  name: string.isRequired,
  onClick: func,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  noHover: bool
}

IconComponent.defaultProps = {
  onClick: null,
  color: 'white',
  noHover: false
}

export default IconComponent
