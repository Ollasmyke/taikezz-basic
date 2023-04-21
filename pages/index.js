import Layout from './../components/layout';

import Slide from './../components/slide';
import Offers from './../components/home/offers';
import LatestProjects from './../components/home/latestProjects';
import OtherProjects from './../components/home/otherProjects';

export default function Home() {
  return (
    <Layout title="Home ">
      <section className="">
        <Slide />
        <Offers />
        <LatestProjects />
        <OtherProjects />
      </section>
    </Layout>
  );
}
