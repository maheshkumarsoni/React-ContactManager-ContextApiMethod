import React, { Component, createContext } from "react";
// import uuid from "react-uuid";
import axios from "axios";

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        ),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    // contacts:[{
    //   id: uuid(),
    //   name: "Mahesh Soni",
    //   email: "sms@gmail.com",
    //   phone: "8980829961",
    // },
    // {
    //   id: uuid(),
    //   name: "Dhananjay Soneji",
    //   email: "dhanan@gmail.com",
    //   phone: "6358698574",
    // },
    // {
    //   id: uuid(),
    //   name: "Helly Shah",
    //   email: "helly@gmail.com",
    //   phone: "8658698574",
    // },
    // {
    //   id: uuid(),
    //   name: "Anjali Sikarwar",
    //   email: "anj@gmail.com",
    //   phone: "76854956581",
    // },
    // {
    //   id: uuid(),
    //   name: "Priya Samanta",
    //   email: "priya@gmail.com",
    //   phone: "96854956581",
    // },];
    contacts: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  // componentDidMount() {
  //   axios.get("http://jsonplaceholder.typicode.com/users").then((res) =>
  //     this.setState({
  //       contacts: res.data,
  //     })
  //   );
  // }

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
