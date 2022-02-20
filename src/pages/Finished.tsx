interface Props {
  name: string | null;
  handleRestart(): void;
}
const Finished = (props: Props) => {
  const { name, handleRestart } = props;
  return (
    <div>
      <h1>{name ? `Spieler ${name} hat gewonnen` : "Unentschieden"}</h1>
      <button onClick={handleRestart}>Neues Spiel</button>
    </div>
  );
};
export default Finished;
