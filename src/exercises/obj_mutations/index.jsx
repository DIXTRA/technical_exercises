import { useState } from 'react';
import TagList from './components/TagList';

/**
 * Exercise: Object mutation
 * 
 * Description: Everything seems to be working fine, until you try to reset the tags.
 * At that point, the collection of tags should go back to its original state, however it
 * still displays the newly created ones.
 * 
 * Your job is:
 *  1. Understand why this is happening
 *  2. Fix this error, so that when pressing "Reset tags" it only shows the initial tag
 */

const initialTags = { example: true };

function ObjectMutations() {
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

export default ObjectMutations;
