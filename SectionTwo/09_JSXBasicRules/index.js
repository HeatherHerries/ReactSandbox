class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My Image!</h1>
        <img src="https://www.pexels.com/photo/clean-clear-cold-drink-416528/" />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
