import { gradient, PurpleDebit, BlackDebit } from "../assets";

const Hero = () => {
  return (
    <div className="m-auto text-center">
      <p>The digital future of banking</p>
      <h1>Introducing our revolutionary card programs</h1>
      <p>
        Terah is a powerful app that provide users with a digital card that they
        can use just like any other credit or debit card, but with some added
        benefits and customizable way than traditional banking.
      </p>
      <div className="relative overflow-hidden">
        <img src={gradient} alt="gradient" className="absolute" />
        <img src={BlackDebit} alt="debit-card2" className="absolute w-[60%]" />
        <img src={PurpleDebit} alt="debit-card" />
      </div>
    </div>
  );
};

export default Hero;