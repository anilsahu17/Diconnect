import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './testimonial.css';

function Testimonials() {

    return(
            <OwlCarousel className='owl-theme main-gallery' autoplay loop margin={10} dots items={1} >
                <div className="item gallery-cell">
                    <a href="https://www.trustpilot.com/review/constacloud.com" target="_blank">
                        <div className="testimonial">
                            <span className="testimonial-author">Portland Distro</span>
                            <img className="testimonial-avatar" src="https://disconnect.constacloud.com/assets/images/trustpilot_rew.png" />
                            <h3>Portland Distro T-shirts and Vinyl</h3>
                            <q className="testimonial-quote">We at Portland Distro save hundreds of hours listing our music for sale into Discogs. With one of the most responsive support teams we have encountered, the team is there hand and foot to meet your storefronts personal needs. Our sales jumped 200 percent the first day and continue to climbs while you control your own profit margin with ease.
                                We are proud to be a partner early on and couldn't imagine life without out the Disconnect App and Constacloud team.
                            </q>
                            <div className="testi_box"><img src="https://disconnect.constacloud.com/assets/images/trustpilot.png" /></div>
                        </div>
                    </a>
                </div>
                <div className="item gallery-cell">
                    <a href="https://www.trustpilot.com/review/constacloud.com" target="_blank">
                        <div className="testimonial">
                            <span className="testimonial-author">George Fertakis</span>
                            <img className="testimonial-avatar" src="https://disconnect.constacloud.com/assets/images/trustpilot_rew.png" />
                            <h3>A fine Discogs migrating solution by a great team.</h3>
                            <q className="testimonial-quote">I was looking for a way to successfully migrate my Discogs store to my Woocommerce one and then keep them synced. For a long time I could not find how I could achieve this, until I got in touch with the Constacloud team. Their Disconnect product surely does the job and the most important thing is the team's will to find solutions and answers to my questions during the process and being available whenever I had something to ask, no matter how minor this thing was. If you are trying to do something similar look no further.</q>
                            <div className="testi_box"><img src="https://disconnect.constacloud.com/assets/images/trustpilot.png"/></div>
                        </div>
                    </a>
                </div>

            </OwlCarousel>
    );
}

export default Testimonials;