import React from 'react';
import Layout from '@theme/Layout';
import '../../css/custom-react-pages.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CollapsedHomepage from '../../../static/img/mockups/homepage-collapsed.png';
import ExpandedHomepage from '../../../static/img/mockups/homepage-expanded.png';
import RestaurantCollapsed from '../../../static/img/mockups/restaurant-collapsed.png';
import RestaurantExpanded from '../../../static/img/mockups/restaurant-expanded.png';
import ItemPage from '../../../static/img/mockups/item-page.png';
import CheckoutPaymentInputs from '../../../static/img/mockups/checkout-payment-inputs.png';
import CheckoutSavedCard from '../../../static/img/mockups/checkout-saved-payments.png';
import CheckoutConfirmation from '../../../static/img/mockups/checkout-confirmation.png';


//TODO: Make this prettier later
export default function MobileOrder() {
    return (
        <Layout>
            <div className="main">
                <div className="inner-container">
                    <h1>Mobile Order App</h1>
                    <p>
                        As someone who often orders on the go between classes, I find that simplicity is the most important quality in
                        a mobile-ordering app. As such, my goal is to redesign my university's dining app to unite users with their
                        next meal as fast as possible. The app will be lightweight and easy to navigate so that no time should be wasted fumbling
                        through menus while hunger is at stake.
                    </p>

                    <p>You can view the design system below in Figma:</p>
                    <iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }, { height: "45vh" }} width="100%" src="https://embed.figma.com/design/o7e4LOpFPTZs2VxY1IkdzQ/Mobile-Order-Design-System?node-id=0-1&embed-host=share" allowfullscreen />

                    <h2>Mockups</h2>
                    <div className="slider-container">
                        <Slider style={{ width: "60%"}} dots={true} infinite={false} speed={500} slidesToShow={1} slidesToScroll={1}>
                            {/* TODO: These images could be passed as a map from list of images with alt titles. */}
                            <img src={CollapsedHomepage} alt="A mockup of a mobile order app with all dropdowns on the homepage collapsed" />
                            <img src={ExpandedHomepage} alt="A mockup of a mobile order app with all dropdowns on the homepage expanded" />
                            <img src={RestaurantCollapsed} alt="A mockup of a mobile order app with all dropdowns on a restaurant's page collapsed" />
                            <img src={RestaurantExpanded} alt="A mockup of a mobile order app with all dropdowns on a restaurant's page expanded" />
                            <img src={ItemPage} alt="A mockup of a mobile order app's page for ordering an individual item" />
                            <img src={CheckoutPaymentInputs} alt="A mockup of a mobile order app's checkout page with payment inputs" />
                            <img src={CheckoutSavedCard} alt="A mockup of a mobile order app's checkout page with saved payment information" />
                            <img src={CheckoutConfirmation} alt="A mockup of a mobile order app's checkout page with a confirmation popup" />
                        </Slider>
                    </div>

                    <h2 style={{marginBottom: "1rem"}}>Prototype</h2>
                    <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="100%" height="800" src="https://embed.figma.com/proto/o7e4LOpFPTZs2VxY1IkdzQ/Mobile-Order-Design-System?node-id=96-1848&node-type=canvas&scaling=contain&content-scaling=fixed&starting-point-node-id=96%3A1035&embed-host=share" allowfullscreen></iframe>

                    <p>More to come...</p>
                </div>
            </div>

        </Layout>
    );
}