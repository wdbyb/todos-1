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
    <form className="mb-3 pb-3 pt-3" onSubmit={(e) => props.onSubmit(e, state)}>
      <fieldset className="form-group">
        <label>Title:</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={state.title}
          onChange={handleChange}
          autoComplete="off"
        />
      </fieldset>
      <fieldset className="form-group">
        <label>Description:</label>
        <input
          className="form-control"
          type="text"
          name="description"
          value={state.description}
          onChange={handleChange}
          autoComplete="off"
        />
      </fieldset>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
