import "../estilos/button.css";

export function Button({ children, classN, valor }) {

  const 

  const handleClick = (e) => {
    console.log(e.target.value);

  };
  return (
    <button value={valor} onClick={handleClick} className={classN}>
      {children}
    </button>
  );
}
