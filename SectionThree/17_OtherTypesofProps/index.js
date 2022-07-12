class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Ringo" from="Paul" bangs={4} />
        <Hello
          to="Brittney"
          from="Adele"
          bangs={10}
          img="https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
