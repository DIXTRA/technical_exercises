import { useState } from 'react';

const initialTags = { example: true };

function Exercise1() {
  const [tags, setTags] = useState(initialTags);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.currentTarget.value);
  };

  const toggleTag = (tag) => {
    tags[tag] = !tags[tag];
    setTags(tags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text) {
      toggleTag(text);
      setText('');
    }
  };

  const handleReset = () => {
    setTags(initialTags);
    setText('');
  };

  const present = text && tags[text];

  return (
    <div className="home-wrapper" style={{ width: 800 }}>
      <h1>Add tags</h1>
      <p>Write to add/mute tags, click on tags to toggle them.</p>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={text} />
        <button type="submit">{present ? 'Mute' : 'Add'}</button>
        <button
          type="button"
          onClick={handleReset}
          style={{ color: '#e45b5b' }}
        >
          Reset tags
        </button>
      </form>

      <h3>My Tags:</h3>
      <TagList tags={Object.entries(tags)} toggleTag={toggleTag} />
    </div>
  );
}

const TagList = ({ tags, toggleTag }) => (
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
);

const Tag = ({ name, value, onClick }) => (
  <button
    title="toggle"
    onClick={onClick}
    className={`tag ${value && 'enabled'}`}
  >
    {name}
  </button>
);

export default Exercise1;
