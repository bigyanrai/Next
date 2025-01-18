const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    padding: "100px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #ccc",
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
