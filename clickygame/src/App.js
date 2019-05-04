
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
    clicked: true,
    friends,
    correctScore: 0,
    msg: ""
  };

  newFriend = id => {

    // new array for friends.json
    let newfriends = this.state.friends; 
    // filter for match. returns array with matching obj
    let matched = newfriends.filter(newfriend => newfriend.id === id)[0];
    console.log('matched;', matched)

    // if there is a match
    if (matched.clicked) {
      
      this.setState({ clicked: true });
      this.setState({ correctScore });
      this.setState({ msg: "already clicked. sorry" });
      console.log(matched, "match000");
    } else {
      // if no match
      matched.clicked = true;
      console.log("pic clicked", matched.clicked, "id of pic clicked");

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
        <Navbar 
        score ={this.correctScore}/>
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
