import styled from 'styled-components'
import { func, node, bool, string } from 'prop-types'
import Icons from '../Icon/Icons'

const ButtonIcon = ({ name, width, height }) => {
  // If icon name value doesn't match Icons object keys then return null
  if (Icons[name] === undefined) return null
  const Icon = Icons[name]
  return <Icon alt={name} aria-label={`${name} icon`} width={width || height} height={height || width} />
}

const ButtonComponent = ({ onClick, icon, children, width, height, ...otherProps }) => {
  return (
    <Button onClick={onClick} icon={icon} {...otherProps}>
      {icon && <ButtonIcon name={icon} width={width} size={height} />}
      {children && <span>{children}</span>}
    </Button>
  )
}

const Button = styled.button`
    border-radius:6px;
    padding-left: ${({ theme }) => theme.spacing.s16};
    padding-right: ${({ theme }) => theme.spacing.s16};
    padding-bottom: ${({ theme }) => theme.spacing.s8};
    padding-top: ${({ theme }) => theme.spacing.s8};
    font-family: 'intro-rust';
    color: ${(props) =>
      props.red ? props.theme.colors.white : props.theme.colors.redDarker100};
    background: ${(props) =>
      props.red
        ? props.theme.colors.baseStrongRed
        : props.theme.colors.baseLimeGreen};
    font-size: 1rem;
    border: none;
    display: inline-block;
    vertical-align: middle;
    line-height:1.313rem;
     &:hover {
        background:  ${(props) =>
          props.red
            ? props.theme.colors.redLight50
            : props.theme.colors.greenLighten50};
        cursor:pointer;
    }

    &:focus {
    outline: none;
  }

    ${(props) =>
      props.icon &&
      `
        font-size:0.75rem;
    `}

    > svg {
        vertical-align:middle;
    }

    > span {
        vertical-align:middle;
    }
    
    span:nth-child(2) {
      padding-left:${({ theme }) => theme.spacing.s8};
    }
    
    ${(props) =>
      props.secondary &&
      `
      background: ${props.theme.colors.white};
      border: 2px solid ${
        props.red
          ? props.theme.colors.baseStrongRed
          : props.theme.colors.baseLimeGreen
      };
      color: ${props.theme.colors.redDarker100};
      &:hover {
          background: ${
            props.red
              ? props.theme.colors.redLight50
              : props.theme.colors.greenLighten50
          };
      cursor:pointer;
    }
   `}

    ${(props) =>
      props.tertiary &&
      `
      background: ${props.theme.colors.white};
      border: none
      color: ${props.theme.colors.redDarker100};
      &:hover {
          background: ${props.theme.colors.grayishBlueLightest};
      }
    `}

    
    ${(props) =>
      props.primaryLight &&
      `
        background: ${props.theme.colors.greenLighten85};
        border: none
        color: ${props.theme.colors.redDarker100};
    `}

    ${(props) =>
      props.disabled &&
      `
        background: ${props.theme.colors.grayishBlueLightest};
        border: none;
        color: ${props.theme.colors.grayishBlue};
        &:hover {
            background: ${props.theme.colors.grayishBlueLightest};
            cursor:not-allowed;
        }
    `}
`

ButtonIcon.propTypes = {
  name: string.isRequired
}

ButtonComponent.propTypes = {
  children: node,
  href: string,
  onClick: func,
  secondary: bool,
  red: bool,
  icon: string
}

ButtonComponent.defaultProps = {
  children: null,
  secondary: false,
  red: false,
  href: null,
  onClick: null,
  icon: ''
}

export default ButtonComponent
