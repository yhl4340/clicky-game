
import React, {Component} from 'react'
import './App.css';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import friends from './friends.json';
let msg = '';
let correctScore = 0;
class App extends Component {
  state = {
    clicked: 0,
    friends,
    correctScore: 0,
    clickedArr: [],
    msg: ""
  };

  // shuffle = () => {
  //   for (var i = 0; i < friends.length; i++) {
  //     const j = Math.floor(Math.random() * i + 1);
  //     const curFriend = friends[i];
  //     friends[i] = friends[j];
  //     friends[j] = curFriend;
  //   }
  // };

  newFriend = id => {
    // new array for friends.json
    const newfriends = this.state.friends;
    // filter out friend that is clicked

    let matched = newfriends.filter(newfriend => newfriend.id === id)
    matched[0].clicked = this.state.clicked;
    // if there is a match
    if (matched[0].clicked ) {
      console.log(matched[0], 'match 0')
      this.setState({ msg: "already clicked. sorry" });
      // below is to reset back to false
      // for (let i = 0; i <friends.length; i++){
      //   friends[i].clicked = false;
      // }
      this.setState({ friends });
      this.setState({ correctScore });
    } else {
      // if no match
      // matched[0].clicked = 0;
      console.log("pic clicked", matched[0].clicked, "id of pic clicked");
      // for (let i = 0; i <friends.length; i++){
      //   friends[i].clicked = false;
      // };
      newfriends.sort((a, b) => {
        return 0.5 - Math.random();
      });
      this.setState({
        correctScore: this.state.correctScore + 1,
        msg: "Good Job"
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <h3>{this.state.msg}</h3>
        <h4>{this.state.correctScore}</h4>
        {this.state.friends.map(friend => (
          <Cards
            id={friend.id}
            key={friend.id}
            image={friend.image}
            newFriend={this.newFriend}
          />
        ))}
      </div>
    );
  }
}
    
export default App;
