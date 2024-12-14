import React from 'react';
import Layout from '@theme/Layout';
import '../../css/custom-react-pages.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectIntro from "@site/src/components/project-intro.mdx";
import ProjectMiddle1 from "@site/src/components/project-middle1.mdx";
import ProjectMiddle2 from "@site/src/components/project-middle2.mdx";
import ProjectConclusion from "@site/src/components/project-conclusion.mdx";

import MockCollapsedHomepage from '../../../static/img/mockups/homepage-collapsed.png';
import MockExpandedHomepage from '../../../static/img/mockups/homepage-expanded.png';
import MockRestaurantCollapsed from '../../../static/img/mockups/restaurant-collapsed.png';
import MockRestaurantExpanded from '../../../static/img/mockups/restaurant-expanded.png';
import MockItemPage from '../../../static/img/mockups/item-page.png';
import MockCheckoutPaymentInputs from '../../../static/img/mockups/checkout-payment-inputs.png';
import MockCheckoutSavedCard from '../../../static/img/mockups/checkout-saved-payments.png';
import MockCheckoutConfirmation from '../../../static/img/mockups/checkout-confirmation.png';

import SketchCollapsedHomepage from '../../../static/img/sketch1.PNG';
import SketchExpandedHomepage from '../../../static/img/sketch2.PNG';
import SketchRestaurantExpanded from '../../../static/img/sketch3.PNG';
import SketchItemPage from '../../../static/img/sketch4.PNG';
import SketchCheckoutPaymentInputs from '../../../static/img/sketch5.PNG';
import SketchCheckoutSavedCard from '../../../static/img/sketch6.PNG';
import SketchCheckoutConfirmation from '../../../static/img/sketch7.PNG';


export default function MobileOrder() {
    return (
        <Layout>
            <div className="main">
                <div className="inner-container">
                    <div>
                        <ProjectIntro />
                    </div>

                    <div className="slider-container">
                        <Slider style={{ width: "60%" }} dots={true} infinite={false} speed={500} slidesToShow={1} slidesToScroll={1}>
                            <img src={SketchCollapsedHomepage} alt="A sketch of a mobile order app with all dropdowns on the homepage collapsed" />
                            <img src={SketchExpandedHomepage} alt="A sketch of a mobile order app with all dropdowns on the homepage expanded" />
                            <img src={SketchRestaurantExpanded} alt="A sketch of a mobile order app with all dropdowns on a restaurant's page expanded" />
                            <img src={SketchItemPage} alt="A sketch of a mobile order app's page for ordering an individual item" />
                            <img src={SketchCheckoutPaymentInputs} alt="A sketch of a mobile order app's checkout page with payment inputs" />
                            <img src={SketchCheckoutSavedCard} alt="A sketch of a mobile order app's checkout page with saved payment information" />
                            <img src={SketchCheckoutConfirmation} alt="A sketch of a mobile order app's checkout page with a confirmation popup" />
                        </Slider>
                    </div>

                    <div>
                        <ProjectMiddle1 />
                    </div>

                    <div className="slider-container">
                        <Slider style={{ width: "60%" }} dots={true} infinite={false} speed={500} slidesToShow={1} slidesToScroll={1}>
                            <img src={MockCollapsedHomepage} alt="A mockup of a mobile order app with all dropdowns on the homepage collapsed" />
                            <img src={MockExpandedHomepage} alt="A mockup of a mobile order app with all dropdowns on the homepage expanded" />
                            <img src={MockRestaurantCollapsed} alt="A mockup of a mobile order app with all dropdowns on a restaurant's page collapsed" />
                            <img src={MockRestaurantExpanded} alt="A mockup of a mobile order app with all dropdowns on a restaurant's page expanded" />
                            <img src={MockItemPage} alt="A mockup of a mobile order app's page for ordering an individual item" />
                            <img src={MockCheckoutPaymentInputs} alt="A mockup of a mobile order app's checkout page with payment inputs" />
                            <img src={MockCheckoutSavedCard} alt="A mockup of a mobile order app's checkout page with saved payment information" />
                            <img src={MockCheckoutConfirmation} alt="A mockup of a mobile order app's checkout page with a confirmation popup" />
                        </Slider>
                    </div>

                    <p style={{margin: "2rem 0"}}>
                        In the prototype below, you are able to navigate from the homepage to one restaurant and add one menu item to your cart.
                        This is because I decided that implementing tens of pages for unique restaurants and items would be outside the scope of
                        this prototype and something that would almost be easier to implmement in a real application than in Figma. You are
                        also only able to expand the first dropdown of each screen for similar reasons as there would be several iterations of
                        each page to make every combination of dropdown state possible. Another limitation of the prototype is that I was not
                        able to add a bubble to the cart showing it has something in it after placing an order with the free version of Figma,
                        but this is something I would want in a real application. After adding an item to cart (or really at any time), you're
                        able to hit the cart icon in the top right to work through the checkout page. You can only confirm your payment info
                        and place your order as the input fields are not functional.
                    </p>

                    <div style={{ textAlign: "center" }} width="100%">
                        <iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="54%" height="800" src="https://embed.figma.com/proto/9wgqJFQAHbK0LrwVB4hQaC/Mobile-Order-Early-Prototype?node-id=96-1035&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=96%3A1035&embed-host=share" allowfullscreen></iframe>
                    </div>

                    <div>
                        <ProjectMiddle2 />
                    </div>

                    <iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }, { height: "45vh" }} width="100%" src="https://embed.figma.com/design/o7e4LOpFPTZs2VxY1IkdzQ/Mobile-Order-Design-System?node-id=0-1&embed-host=share" allowfullscreen />

                    <p style={{ margin: "2rem 0" }}>
                        In the final prototype below, you will find that the overall workflow has not been adjusted much from the initial
                        iteration. Some additional features have been added such as the abilities to choose whether your card should
                        be saved or not and to change the topping of an item as I felt these were both important aspects to have functional
                        in the final prototype. Overall, the other changes besides those described in the section above include minor polishing
                        of things like spacing and borders. Had I committed more time to this project, I would have liked to start weakening and
                        outright removing many of the hard black borders on elements as I was given feedback on how this makes it look a bit dated.
                        I agree with this assessment, but that was how I envisioned it from the start. I didn't realize how much sleeker things
                        could look by simply removing borders until I made this change to the green confirmation buttons on the app. I chose to keep
                        this change as it looks good on its own, but I would've needed to make changes to so many elements of the design system to
                        give the rest of the elements a consistent look and feel with lesser borders. Unfortunately, this realization came when I was already
                        beginning to sunset the project.
                    </p>

                    <div style={{ textAlign: "center" }} width="100%">
                        <iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="54%" height="800" src="https://embed.figma.com/proto/o7e4LOpFPTZs2VxY1IkdzQ/Mobile-Order-Design-System?node-id=96-1848&node-type=canvas&scaling=contain&content-scaling=fixed&starting-point-node-id=96%3A1035&embed-host=share" allowfullscreen></iframe>
                    </div>

                    <ProjectConclusion />
                </div>
            </div>

        </Layout>
    );
}
