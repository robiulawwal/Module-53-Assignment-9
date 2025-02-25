import AboutSection from "../components/AboutSection";
import LingoBingoApp from "../components/LingoBingoApp";
import PricingSection from "../components/PricingSection";
import SliderSection from "../components/SliderSection";
import SuccessSection from "../components/SuccessSection";
import TestimonialsSection from "../components/CommentsSection";

const HomePage = () => {
    return (
        <div>
            <SliderSection></SliderSection>
            <AboutSection></AboutSection>
            <SuccessSection></SuccessSection>
            {/* <LingoBingoApp></LingoBingoApp> */}
            <PricingSection></PricingSection>
       <TestimonialsSection></TestimonialsSection>
        </div>
    );
};

export default HomePage;