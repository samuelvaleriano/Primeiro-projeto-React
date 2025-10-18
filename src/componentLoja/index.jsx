import "./styles.css";
export default function ComponentLoja(props) {
  return (
    <section className="cardLoja">
      <div className="logo" style={{backgroundColor: props.color}}></div>
      <div>
        <h3>{props.nome || "UnyDonald’s"}</h3>
        <span>{props.descrisao || "Fast-food"}</span>
      </div>
    </section>
  );
}