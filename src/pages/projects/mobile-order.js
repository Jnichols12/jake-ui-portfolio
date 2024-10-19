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
                    <iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="100%" height="450" src="https://embed.figma.com/design/o7e4LOpFPTZs2VxY1IkdzQ/Mobile-Order-Design-System?node-id=0-1&embed-host=share" allowfullscreen />

                    <h2>Mockups</h2>
                    <div className="slider-container">
                        <Slider style={{ width: "80%"}} dots={true} infinite={false} speed={500} slidesToShow={1} slidesToScroll={1}>
                            {/* TODO: These images could be passed as a map from list of images with alt titles. */}
                            <img src={CollapsedHomepage} alt="Homepage Collapsed" />
                            <img src={ExpandedHomepage} alt="Homepage Expanded" />
                            <img src={RestaurantCollapsed} alt="Restaurant Page Collapsed" />
                            <img src={RestaurantExpanded} alt="Restaurant Page Expanded" />
                            <img src={ItemPage} alt="Item Page" />
                            <img src={CheckoutPaymentInputs} alt="Checkout with Payment Inputs" />
                            <img src={CheckoutSavedCard} alt="Checkout with Saved Card" />
                            <img src={CheckoutConfirmation} alt="Checkout with Confirmation" />
                            {/* TODO: Add last mockups */}
                        </Slider>
                    </div>

                    <p>More to come...</p>
                </div>
            </div>

        </Layout>
    );
}
