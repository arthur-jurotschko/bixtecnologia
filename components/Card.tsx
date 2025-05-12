export default function Card({ title, value }: { title: string; value: number }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{value.toFixed(2)}</p>
    </div>
  );
}
