import styled from 'styled-components'
import PropTypes from 'prop-types'

function modifyStyles(breakpoints, property, mqDevice) {
  const keys = Object.keys(breakpoints)
  let customCss = ''
  keys.forEach((key) => {
    if (key === 'base') {
      customCss += `
        @media (min-width: 100px) {
          ${property}: ${breakpoints[key]}
        }
      `
    } else {
      const mq = mqDevice[key]
      customCss += `
        @media ${mq} {
          ${property}: ${breakpoints[key]}
        }
      `
    }
  })
  return customCss
}

const Typography = styled.div`
  margin-top: 0;
  margin-bottom: 0;

  color: ${({ color, theme }) => color || theme.colors.grayishBlueDarker};

  font-weight: ${({ weight }) => weight || 'normal'};

  ${({ theme, displayH2, size, lineHeight }) =>
    displayH2 &&
    `
    font-size: 2.813rem;
    line-height: 3.328rem;
    font-family: 'intro-rust-h2';
    @media ${theme.device.xs} {
      font-size: 3.75rem;
      line-height: 5.25rem;
    }

    ${size ? modifyStyles(size, 'font-size', theme.device) : ''}

    ${lineHeight ? modifyStyles(lineHeight, 'line-height', theme.device) : ''}
  `}

  ${({ theme, h1, size, lineHeight }) =>
    h1 &&
    `
    font-size: 2.25rem;
    line-height: 3.15rem;
    font-family: 'intro-rust-h2';
    @media ${theme.device.xs} {
      font-size: 3rem;
      line-height: 4.2rem;
    }

    ${size ? modifyStyles(size, 'font-size', theme.device) : ''}

    ${lineHeight ? modifyStyles(lineHeight, 'line-height', theme.device) : ''}
  `}

  ${({ theme, h2, size, lineHeight }) =>
    h2 &&
    `
    font-size: 1.5rem;
    line-height: 2.1rem;
    font-family: 'intro-rust-h1';
    @media ${theme.device.xs} {
      font-size: 2rem;
      line-height: 2.8rem;
    }

    ${size ? modifyStyles(size, 'font-size', theme.device) : ''}

    ${lineHeight ? modifyStyles(lineHeight, 'line-height', theme.device) : ''}
  `}

  ${({ theme, size, h3, lineHeight }) =>
    h3 &&
    `
    font-size: 1.125rem;
    line-height: 1.575rem;
    font-family: 'intro-rust-h1';
    @media ${theme.device.xs} {
      font-size: 1.5rem;
      line-height: 2.1rem;
    }

    ${size ? modifyStyles(size, 'font-size', theme.device) : ''}

    ${lineHeight ? modifyStyles(lineHeight, 'line-height', theme.device) : ''}
  `}

  ${({ theme, size, subheading1, lineHeight }) =>
    subheading1 &&
    `
    font-size: 0.938rem;
    line-height: 1.313rem;
    font-family: 'intro-rust-book';
    @media ${theme.device.xs} {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    ${size ? modifyStyles(size, 'font-size', theme.device) : ''}

    ${lineHeight ? modifyStyles(lineHeight, 'line-height', theme.device) : ''}
  `}

  ${({ theme, size, subheading2, lineHeight }) =>
    subheading2 &&
    `
    font-size: 0.744rem;
    line-height: 1.083rem;
    font-family: 'intro-rust-h1';
    @media ${theme.device.xs} {
      font-size: 0.875rem;
      line-height: 1.225rem;
    }

    ${size ? modifyStyles(size, 'font-size', theme.device) : ''}

    ${lineHeight ? modifyStyles(lineHeight, 'line-height', theme.device) : ''}
  `}

  ${({ theme, size, body, lineHeight, color }) =>
    body &&
    `
    margin-top: 0;
    font-size: 0.85rem;
    line-height: 1.19rem;
    font-family: 'myriad-pro';
    color: ${color || theme.colors.grayishBlueDark};
    @media ${theme.device.xs} {
      font-size: 1rem;
      line-height: 1.4rem;
    }

    ${size ? modifyStyles(size, 'font-size', theme.device) : ''}

    ${lineHeight ? modifyStyles(lineHeight, 'line-height', theme.device) : ''}
  `}
`

const TypographyComponent = ({
  tag,
  color,
  children,
  weight,
  size,
  lineHeight,
  ...otherProps
}) => {
  return (
    <Typography
      as={tag}
      color={color}
      weight={weight}
      size={size}
      lineHeight={lineHeight}
      {...otherProps}>
      {children}
    </Typography>
  )
}

TypographyComponent.propTypes = {
  tag: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  weight: PropTypes.string,
  size: PropTypes.shape({
    base: PropTypes.string,
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string,
    xxl: PropTypes.string
  }),
  lineHeight: PropTypes.shape({
    base: PropTypes.string,
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string,
    xxl: PropTypes.string
  }),
  displayH2: PropTypes.bool,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  subheading1: PropTypes.bool,
  subheading2: PropTypes.bool,
  body: PropTypes.bool
}

TypographyComponent.defaultProps = {
  color: '',
  size: null,
  weight: '',
  lineHeight: null,
  displayH2: false,
  h1: false,
  h2: false,
  h3: false,
  subheading1: false,
  subheading2: false,
  body: false
}

export default TypographyComponent
