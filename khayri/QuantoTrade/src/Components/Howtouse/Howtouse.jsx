
import AboutIMG from '../../assets/step2.png';
import './Howtouse.css';

const Howtouse = () => {
  const steps = [
    { text: 'Step One :', backgroundColor: 'white', textColor: 'black', image: AboutIMG, description: 'Description for Step 1' },
    { text: 'Step Two :', backgroundColor: 'black', textColor: 'white', image: AboutIMG, description: 'Description for Step 2' },
    { text: 'Step Three :', backgroundColor: 'white', textColor: 'black', image: AboutIMG, description: 'Description for Step 3' },
    { text: 'Step Four :', backgroundColor: 'black', textColor: 'white', image: AboutIMG, description: 'Description for Step 4' },
    { text: 'Step Five :', backgroundColor: 'white', textColor: 'black', image: AboutIMG, description: 'Description for Step 5' },
    { text: 'Step Six :', backgroundColor: 'black', textColor: 'white', image: AboutIMG, description: 'Description for Step 6' },
  ];

  return (
    <div className="how-to-use">
      {steps.map((step, index) => (
        <div key={index} className={`step row align-items-center ${index % 2 === 0 ? 'flex-row-reverse right' : 'left'}`} style={{ backgroundColor: step.backgroundColor }}>
          <div className="col-lg-4 text-center text-lg-start py-4">
            <h3 className={`mb-4 text-primary-gradient ${step.backgroundColor === 'white' ? 'text-black' : 'text-white'}`}>{step.text}</h3>
            <h6 className={`mb-4 ${step.backgroundColor === 'white' ? 'description-black' : 'description-white'}`}>{step.description}</h6>
          </div>
          <div className="col-lg-5 py-5">
            <img className="img-fluid" src={step.image} alt={`Step ${index + 1} Image`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Howtouse;
