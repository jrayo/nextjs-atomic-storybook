import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const NavigationItem = ({ href, color, children, small, ...otherProps }) => {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <StyledItem
      color={color}
      onClick={(e) => handleClick(e)}
      {...otherProps}
      small={small}>
      <a href={href || ' '}>{children}</a>
    </StyledItem>
  )
}

const StyledItem = styled.li`
  background: ${({ theme, color }) =>
    color || theme.colors.grayishBlueLightest};
  border: none;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  margin-left: ${({ theme }) => theme.spacing.s8};
  margin-right: ${({ theme }) => theme.spacing.s8};
  margin-top: ${({ theme }) => theme.spacing.s16};
  margin-bottom: ${({ theme }) => theme.spacing.s16};
  text-decoration: none;
  font-family: 'intro-rust';
  color: ${({ theme }) => theme.colors.redDarker100};
  &,
  a:hover {
    color: ${({ small, theme }) => (small ? null : theme.colors.baseStrongRed)};
    cursor: pointer;
  }
  &,
  a:focus {
    outline: none;
  }
  flex-direction: column-count;
  height: 1.313rem;
  &:before {
    content: '';
    position: relative;
    display: block;
    border-radius: 3px;
    width: 100%;
    max-width: 14px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.baseStrongRed};
    visibility: hidden;
    bottom: calc(-100% - 1px);
    left: calc(50% - 7px);
    text-align: center;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover::before {
    ${({ small }) =>
      // if it small, don't show red underline
      !small &&
      `
      visibility: visible;
      transform: scaleX(2);
    `}
  }
  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.redDarker100};
    background: ${({ theme, color }) =>
      color || theme.colors.grayishBlueLightest};
  }
  ${({ small }) =>
    small &&
    `
      font-family: 'intro-rust-book';   
      font-size: 0.75rem; 
      color:#110403;
      &:hover{
        text-decoration:underline;
      }
  `}
`

// Expected prop values
NavigationItem.propTypes = {
  small: PropTypes.bool,
  href: PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node.isRequired
}

// Default prop values
NavigationItem.defaultProps = {
  small: false,
  href: '/',
  color: 'white'
}

export default NavigationItem
