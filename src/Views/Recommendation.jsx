import { Button } from "../components/Button";

export const Recommendation = () => {
  return (
    <div
      className="container-xxl bgRecommendation  py-6 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div
          className="mx-auto text-center wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxwidth: "600px" }}
        >
          <h1 className="mb-3">what are you waiting for?</h1>
          <h4 className="mb-5">
            Start building your trading strategies with just a click
          </h4>
        </div>

        <div
          className="mx-auto text-center wow fadeIn"
          data-wow-delay="0.1s"
        >
          <Button />
        </div>
      </div>
    </div>
  );
};
