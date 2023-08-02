import { gradient, PurpleDebit, BlackDebit } from "../assets";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text ">
        <p className="tagline">The digital future of banking</p>
        <h1>Introducing our revolutionary card programs </h1>
        <p>
          Terah is a powerful app that provide users with a digital card that
          they can use just like any other credit or debit card, but with some
          added benefits and customizable way than traditional banking.
        </p>
        <div className="gradient-container">
          <img src={gradient} alt="gradient" className="gradient" />
          <img src={PurpleDebit} alt="debitCard-1" className="purple-debit" />
          <img src={BlackDebit} alt="creditCard" className="black-debit" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
