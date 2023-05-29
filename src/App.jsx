import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    fullName: "Michael Peter",
    bio: "otaku",
    imgSrc: "/logo512.png",
    profession: "Sofware Engineer",
  };

  render() {
    return (
      <main className="app">
        <article>
          <img src={this.state.imgSrc} alt="Photo" />
          <h1>{this.state.fullName}</h1>
          <p>{this.state.bio}</p>
          <p>{this.state.profession}</p>
        </article>
      </main>
    );
  }
}

export default App;
