import { clients } from "../constants/data";

const Clients = () => {
  return (
    <div>
      <p className="text-center">
        Powering the world’s best product teams. From next-gen startups to
        established enterprises.
      </p>
      <div className="flex justify-between">
        {clients.map((client) => (
          <div key={client.id}>
            <img src={client.logo} alt={client.id} className="w-[100px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
