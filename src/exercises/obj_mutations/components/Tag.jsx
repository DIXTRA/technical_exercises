export default function Tag({ name, value, onClick }) {
  return (
    <button
      title="toggle"
      onClick={onClick}
      className={`tag ${value && 'enabled'}`}
    >
      {name}
    </button>
  );
}
