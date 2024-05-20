export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>GAME OVER!</h2>
      <p>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>It's a draw!</p>}
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
}
