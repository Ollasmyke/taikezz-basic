import Layout from './../components/layout';

import Slide from './../components/slide';
import Offers from './../components/home/offers';
import Projects from './../components/home/latestProjects';

export default function Home() {
  return (
    <Layout title="Home ">
      <section className="">
        <Slide />
        <Offers />
        <Projects />
      </section>
    </Layout>
  );
}
