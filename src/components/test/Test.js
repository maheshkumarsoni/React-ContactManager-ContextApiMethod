import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          title: data.title,
          body: data.body,
        });
        // console.log("ComponentDidMount");
      });
  }
  //   componentWillMount() {
  //     console.log("ComponentWillMount");
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <br />
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
