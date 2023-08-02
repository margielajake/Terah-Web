import { clients } from "../constants/data";

const Clients = () => {
  return (
    <div className="clients-section">
      <p>
        Powering the world’s best product teams. From next-gen startups to
        established enterprises.
      </p>
      <div>
        {clients.map((client) => (
          <div key={client.id} className="flex">
            <img src={client.logo} alt={client.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
