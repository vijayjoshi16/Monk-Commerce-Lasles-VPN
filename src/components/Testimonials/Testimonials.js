import styled from "styled-components";
import ReactElasticCarousel from "react-elastic-carousel";
import testimonialData from '../../testimonialData';
import TestimonialCard from './TestimonialCard';

const TestimonialComponent = styled.div`
    text-align: center;
`

const TestimonialHeading = styled.h2`
    max-width: 360px;
    font-size: 1.5rem;
    margin-top: 80px;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;
    line-height: 40px;
`

const TestimonialSubheading = styled.p`
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    color: #656b78;
    font-size: 0.85rem;
    line-height: 20px;
`



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 960, itemsToShow: 3 }
  ];
  

const Testimonials = ()=>{
    return(
        <TestimonialComponent>
            <TestimonialHeading>Trusted by Thousands of Happy Customer</TestimonialHeading>
            <TestimonialSubheading>These are the stories of our customers who have joined us with great pleasure when using this crazy feature</TestimonialSubheading>
            <ReactElasticCarousel breakPoints={breakPoints}>
                {
                    testimonialData.map((data)=>{
                        return(
                            <TestimonialCard data={data}></TestimonialCard>
                        )
                    })
                }
            </ReactElasticCarousel>
        </TestimonialComponent>
    )
}

export default Testimonials;