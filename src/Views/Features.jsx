import CardCompanies from "../components/CardCompanies";

function Features() {
  const companies = [
    {
      title: "Alpha vantage",
      image: "./src/assets/images/dataProvider.png",
    },
    {
      title: "Alpaca",
      image: "./src/assets/images/alpaca.png",
    },
    {
      title: "YahooFinance",
      image: "./src/assets/images/yahoofinance.png",
    },
    {
      title: "App Development",
      image: "./src/assets/images/streamlit.png",
    },
    {
      title: "App Deployment",
      image: "./src/assets/images/github.png",
    },
  ];
  return (
    <div className="container-xxl py-6">
      <div className="container">
        <div className="mb-4 text-center">
          <h1>Built and powered by trusted companies</h1>
          <p>
            QuantoTrade is constructed using the best available resources
            provided by some of the most established companies in the market
          </p>
        </div>
        <div className="row g-2">
          {companies.map((el, index) => (
            <CardCompanies
              key={index}
              imageComp={el.image}
              titleComp={el.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
