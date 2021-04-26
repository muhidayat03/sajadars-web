import Youtube from "../../components/Youtube";
import styled from "styled-components";

const YoutubeSection = () => (
  <Section>
    <YoutubeContainer>
      <Youtube
        src={
          "https://www.youtube.com/embed/40TWHxqpquU?&autoplay=1&mute=1&enablejsapi=1&loop=1&playlist=40TWHxqpquU"
        }
      />
    </YoutubeContainer>
  </Section>
);
 
export default YoutubeSection;

const Section = styled.div`
  width: 100%;
  background-color: black;
`;
const YoutubeContainer = styled.div`
  max-width: 1280px;
  margin: auto;
`;
