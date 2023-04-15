import React from 'react';
import Footer from '../../Shards/Footer/Footer';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';
import Services from '../servicees/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Section></Section>
            <Footer></Footer>
        </div>
    );
};

export default Home;