class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Elton John" hobbies={["Piano", "Singing", "Dancing"]} />

        <Friend
          name="Al Capone"
          hobbies={["Shooting", "Stealing", "Gambling"]}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
