import { useSelector, useDispatch } from "react-redux";

export const ContadorRedux = () => {
  const contador = useSelector((state) => state.contador);
  const dispatch = useDispatch();

  return (
    <section>
      <p>Valor: {contador}</p>
      <button onClick={() => dispatch({ type: "INCREMENTAR" })}>+</button>
      <button onClick={() => dispatch({ type: "DISMINUIR" })}>-</button>
    </section>
  );
};