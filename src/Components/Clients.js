import { clients } from "../constants/data";

const Clients = () => {
  return (
    <div className="clients-section">
      <p className="client-tagline">
        Powering the world’s best product teams. From next-gen startups to
        established enterprises.
      </p>
      <div className="flex client">
        {clients.map((client) => (
          <div key={client.id}>
            <img src={client.logo} alt={client.title} className="client-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
