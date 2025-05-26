import { useEffect, useState } from "react";
import { pedirItemPorId } from "../helpers/pedirDatos";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export function ItemDetailContainer() {
  const [item, setItem] = useState();
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    pedirItemPorId(Number(id))
      .then((res) => {
        setItem(res);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{item && <ItemDetail item={item}></ItemDetail>}</div>;
}
