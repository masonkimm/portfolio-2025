import { Carousel } from 'antd';
import { Container } from '../../styles/global';
import styled from '@emotion/styled';

// Styled Components for Custom Styles
const CarouselContainer = styled.div`
  width: 100%;
  max-width: 800px; /* Set a max width */
  margin: auto;
  overflow: hidden;
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px; /* Increased height */
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  text-align: center;
  border-radius: 12px;
`;

const slides = [
  { text: 'Slide 1', bg: 'linear-gradient(135deg, #ff416c, #ff4b2b)' },
  { text: 'Slide 2', bg: 'linear-gradient(135deg, #007adf, #00ecbc)' },
  { text: 'Slide 3', bg: 'linear-gradient(135deg, #ff6a00, #ee0979)' },
  { text: 'Slide 4', bg: 'linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)' }
];

const Landing = () => {
  return (
    <Container id="aboutPage">
      <CarouselContainer>
        <Carousel autoplay effect="fade">
          {slides.map((slide, index) => (
            <Slide key={index} style={{ background: slide.bg }}>
              {slide.text}
            </Slide>
          ))}
        </Carousel>
      </CarouselContainer>
    </Container>
  );
};

export default Landing;
