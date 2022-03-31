import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./page/homepage/Homepage.component";
import Shop from "./page/shoppage/Shop.component";
import Header from "./components/header/Header.component";
import { Sign } from "./page/signin-signup/Sign.component";
import { auth, creatUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </div>
    );
  }
}

export default App;
