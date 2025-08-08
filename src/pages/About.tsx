import Head from "@/components/shared/Head";

const About = () => {
  return (
    <>
      <Head title="About Us | AutoSell Ltd" description="AutoSell is Ghana's mobile-first car advertising platform connecting buyers with trusted sellers and garages." canonicalPath="/about" />
      <section className="container py-10 animate-fade-in">
        <h1 className="text-3xl font-bold">About Us</h1>
        <div className="prose prose-neutral max-w-none mt-4">
          <p>
            AutoSell Ltd is a modern, mobile-first online car advertising platform based in Ghana. We connect car buyers with trusted sellers — including car garages, dealerships, and private individuals — and actively promote listings via our Facebook and Instagram pages.
          </p>
          <p>
            Our mission is simple: make car buying and selling easier, faster, and more transparent for everyone. Whether you're a garage looking to boost visibility or an individual ready to sell, AutoSell helps your listings reach more buyers.
          </p>
          <ul>
            <li>Showcase available cars with clean, high-quality images and details</li>
            <li>Paid ad service for individuals who want to promote their cars</li>
            <li>Partnerships with garages and dealers across Ghana</li>
            <li>Simple contact options via WhatsApp and social media</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
