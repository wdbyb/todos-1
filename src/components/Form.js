import React from 'react';

const Form = () => {
  return (
    <form>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
