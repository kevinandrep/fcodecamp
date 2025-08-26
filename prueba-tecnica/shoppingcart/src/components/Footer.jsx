export function Footer({ filters }) {
  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 20)}
      <h4>Mi prueba tecnica de React</h4>
      <span>@KevinPB</span>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  );
}
