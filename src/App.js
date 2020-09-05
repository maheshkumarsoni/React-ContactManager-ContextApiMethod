import React from "react";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //it's not working with github pages so do the below one
// import { HashRouter as Router, Route, Switch } from "react-router-dom"; // use it for GitHub Paged deploy
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
import EditContact from "./components/contacts/EditContact";

function App() {
  return (
    <Provider>
      <Router>
        {/* <Router basename={process.env.PUBLIC_URL}> do this to work with browser router*/}
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            {/* <Contact name="Mahesh Soni" email="sms@gmail.com" phone="52456585" />
        <Contact name="Rahul Mishra" email="rm@gmail.com" phone="84854554" /> */}
            {/* <AddContact />
          <Contacts /> */}
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
