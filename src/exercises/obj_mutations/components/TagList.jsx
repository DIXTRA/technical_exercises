import Tag from './Tag';

export default function TagList({ tags, toggleTag }) {
  return (
    <div style={{ display: 'flex', padding: 6 }}>
      {tags.map(([key, value]) => (
        <Tag
          key={key}
          name={key}
          value={value}
          onClick={() => {
            toggleTag(key);
          }}
        />
      ))}
    </div>
  )
}
