import styled from "styled-components";

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
    color: #656b78;
    font-size: 0.85rem;
    line-height: 20px;
`

const Testimonials = ()=>{
    return(
        <TestimonialComponent>
            <TestimonialHeading>Trusted by Thousands of Happy Customer</TestimonialHeading>
            <TestimonialSubheading>These are the stories of our customers who have joined us with great pleasure when using this crazy feature</TestimonialSubheading>
        </TestimonialComponent>
    )
}

export default Testimonials;