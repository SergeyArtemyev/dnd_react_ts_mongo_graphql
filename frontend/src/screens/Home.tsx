import { Fragment } from 'react';
import Showcase from '../components/layout/home/Showcase';
import MainContent from '../components/layout/home/MainContent';
import UpdateSection from '../components/layout/home/UpdateSection';

const Home = () => {
    return (
        <Fragment>
            <Showcase />
            <MainContent />
            <UpdateSection />
        </Fragment>
    );
};

export default Home;
