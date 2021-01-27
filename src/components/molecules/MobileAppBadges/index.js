import styled from 'styled-components'
import PropTypes from 'prop-types'

const MobileAppBadges = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'horizontal' ? 'row' : 'column'};
  justify-content: center;
  align-items: center;
  img + img {
    ${({ direction }) =>
      direction === 'horizontal' ? 'padding-left: 1rem;' : 'padding-top: 1rem;'}
  }
`
const MobileAppBadgesComponent = ({ items, direction }) => {
  return (
    <MobileAppBadges direction={direction}>
      {items &&
        items.map(({ title, url, id }) => (
          <img key={id} src={url} alt={title} />
        ))}
    </MobileAppBadges>
  )
}

MobileAppBadgesComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string
    })
  ).isRequired,
  direction: PropTypes.string
}

MobileAppBadgesComponent.defaultProps = {
  direction: 'horizontal'
}

export default MobileAppBadgesComponent
