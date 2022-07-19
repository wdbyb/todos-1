import React, { useState } from 'react';

const Form = (props) => {
  const [state, setState] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={(e) => props.onSubmit(e, state)}>
      <fieldset>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={state.description}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
