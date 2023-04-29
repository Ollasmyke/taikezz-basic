import Layout from './../components/layout';

import CarouselSlider from './../components/carouselSlider';
import Offers from './../components/sections/offers';
import ConstructionProjects from './../components/sections/constructionProjects';
import SupplySourcing from '../components/sections/supplySourcing';
import ClientFeedback from './../components/sections/clientFeedback';
// import Process from './../components/sections/process';
import MeetOurTeam from './../components/sections/meetOurTeam';
import Partners from './../components/sections/partners';
import ContactUs from './../components/sections/contactUs';

export default function Home() {
  return (
    <Layout title="Home ">
      <CarouselSlider />
      <Offers />
      <ConstructionProjects />
      <SupplySourcing />
      <ClientFeedback />
      {/* <Process /> */}
      <MeetOurTeam />
      <Partners />
      <ContactUs />
    </Layout>
  );
}
