import { CardPricing } from "../components/CardPricing";

export const Pricing = () => {
  return (
    <div className="container-xxl py-6" id="pricing">
      <div className="container">
        <div
          className="mx-auto text-center wow fadeInUp"
          data-wow-delay="0.1s"
          style={{maxwidth: "600px"}}
        >
          <h1 className="mb-3">Pricing Plan</h1>
          <p className="mb-5">
            Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
            labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
            sit clita duo justo
          </p>
        </div>
        <div className="row g-4">
          <CardPricing typePack="Standard" price = "29.99" />
          <CardPricing typePack="Professional" price = "49.99" />
          <CardPricing typePack="Ultimate" price = "79.99" />
        </div>
      </div>
    </div>
  );
};
