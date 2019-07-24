import React from "react";

class CreateTodo extends React.Component {
  state = {
    title: "",
    loading: false,
    error: null
  };
  handleSubmit = e => {
    const value = this.state.title;

    e.preventDefault();
    if (this.state.title !== "") {
      this.setState({ title: "", loading: true, error: "" });
      setTimeout(() => {
        this.setState({ loading: false });
        this.props.onCreate(value);
      }, 500);
    }

    if (this.state.title === "") {
      this.setState({ error: "You need to write something first." });
    }
  };
  handleChange = e => {
    const title = e.target.value;
    this.setState({ title });
  };
  render() {
    const { title, loading, error } = this.state;
    return (
      <>
        <form className="todo--create" onSubmit={this.handleSubmit}>
          <label htmlFor="title-input" style={{ justifySelf: "left" }}>
            title
          </label>
          <input
            aria-label="title-input"
            type="text"
            value={title}
            name="title"
            onChange={this.handleChange}
          />
          <button data-testid="submit-button" type="submit">
            add
          </button>
        </form>
        {loading && <p data-testid="loading">Loading...</p>}
        {error && <p data-testid="error">{error}</p>}
      </>
    );
  }
}

export default CreateTodo;
