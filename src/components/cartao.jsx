function Cartao({ titulo, children }) {
  return (
    <div className="cartao">
      <h2>{titulo}</h2>
      {children}
    </div>
  );
}

export default Cartao;