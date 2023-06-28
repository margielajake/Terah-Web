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
      <div className="">
        <img
          src={BlackDebit}
          alt="debit-card2"
          className="absolute w-[60%] z-10 top-72 right-10 "
        />
        <img
          src={PurpleDebit}
          alt="debit-card"
          className="absolute w-[60%] top-96 left-20 "
        />
        <img src={gradient} alt="gradient" className="" />
      </div>
    </div>
  );
};

export default Hero;
