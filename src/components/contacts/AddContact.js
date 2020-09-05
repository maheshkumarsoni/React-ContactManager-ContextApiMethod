import React, { Component } from "react";
import { Consumer } from "../../context";
// import uuid from "react-uuid";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  // constructor(props) {
  //   super(props);
  //   this.nameInput = React.createRef();
  //   this.emailInput = React.createRef();
  //   this.phoneInput = React.createRef();
  // }

  // static defaultProps = {
  //   name: "Your name goes here",
  //   email: "Give me your email here",
  //   phone: "right-down your phone number",
  // };

  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required." } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required." } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "phone is required." } });
      return;
    }

    const newContact = {
      // id: uuid(),
      name: name,
      email: email,
      phone: phone,
    };

    const res = await axios.post(
      "http://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    //clearing the state and textFields
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    this.props.history.push("/");

    // console.log(this.state);
    // const contact = {
    //   name: this.nameInput.current.value,
    //   email: this.emailInput.current.value,
    //   phone: this.phoneInput.current.value,
    // };
    // console.log(contact);
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  {/* <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Name..."
                      name="name"
                      onChange={this.onChange}
                      // defaultValue={name}
                      // ref={this.nameInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      name="email"
                      onChange={this.onChange}
                      // defaultValue={email}
                      // ref={this.emailInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone..."
                      name="phone"
                      onChange={this.onChange}
                      // defaultValue={phone}
                      // ref={this.phoneInput}
                    />
                  </div> */}
                  <TextInputGroup
                    label="Name"
                    name="name"
                    value={name}
                    placeholder="Enter Name..."
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Enter Email..."
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter Phone..."
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    className="btn btn-light btn-block"
                    value="Add Contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
