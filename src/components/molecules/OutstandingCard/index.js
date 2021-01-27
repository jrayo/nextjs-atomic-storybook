import styled from 'styled-components'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'

const Card = styled.article`
  text-align: left;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.grayishBlueLighter};
  background-color: ${(props) => props.theme.colors.white};
`

const TitleContainer = styled.div`
  margin-top: ${(props) => props.theme.spacing.s16};
  margin-bottom: ${(props) => props.theme.spacing.s16};
`

const OutstandingInfo = styled.div`
  padding: ${(props) => props.theme.spacing.s16};
  padding-top: 0;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props) => props.theme.spacing.s16};
`

const OutstandingCard = ({ image, title, description, actionButton }) => {
  const router = useRouter()

  const handleActionButton = (href) => {
    router.push(href)
  }

  return (
    <Card>
      <img src={image.imageURL} alt={image.alt} />
      <OutstandingInfo>
        <TitleContainer>
          <Typography
            tag="h3"
            h3
            size={{ base: '0.938rem', xs: '1.25rem' }}
            lineHeight={{ base: '1.313rem', xs: '1.75rem' }}>
            {title}
          </Typography>
        </TitleContainer>
        <Typography tag="p" body>
          {description}
        </Typography>
        <ButtonContainer>
          <Button
            secondary
            onClick={() => handleActionButton(actionButton.href)}>
            {actionButton.text}
          </Button>
        </ButtonContainer>
      </OutstandingInfo>
    </Card>
  )
}

OutstandingCard.propTypes = {
  image: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  actionButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }).isRequired
}

export default OutstandingCard
