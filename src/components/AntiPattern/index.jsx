// https://medium.com/@vraa/why-using-an-index-as-key-in-react-is-probably-a-bad-idea-7543de68b17c

// anti-pattern: use promise.all for multiple promise calls instead of chaining promises
// promise.all([loadSomething(), loadAnotherThing()])
//  .spread(function(something, another) {
//  doSomethingOnThem(something, another);
// });

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./antipattern.scss";

class AntiPattern extends React.Component {

  state = {
    fruits: ['Apple', 'Mango', 'Grape', 'Peach']
  }

  removeFruit = (index) => {
    let {fruits} = this.state;
    fruits.splice(index, 1);
    this.setState({fruits});
    // anti pattern : use prevState if setState needs some previous state data instead of direct setState
    // this.setState((prevState, props) => ({
    //   counter: prevState.counter + props.increment
    // }));
  }

  // anti-pattern: For hooks

  // Use like this for async call
  // useEffect(() => {
  //   const fetchData = async () => {
  //   const result = await axios('https://hn.algolia.com/api/v1');
  //   setData(result.data);
  // };
  //   fetchData();
  // }, []);

  // instead of below

  // useEffect(async () => {
  //   try {
  //       const response = await fetch(http://hn.algolia.com/api/v1');
  //       setData(response)
  //   } catch (e) {
  //       console.error(e);
  //   }
  // }, []);

  // use multiple states
  // const [user, setUser] = useState('');
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');

  // instead of below
  // const [st, setSt] = useState({loading: true, user: '', error: ''});

  render() {
    // anti pattern : avoid declaring variable inside render()
    // const var = 1;

    return (
      <div className="anti-pattern">
        <div style={{ textAlign: 'center' }}>See how on clicking any element, effect is applied to only last element.</div>
        <ul>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>

          {
            // See the difference between below two code: with index, animation applies only to last element
            // this.state.fruits.map((fruit, index) => <li key={fruit} onClick={this.removeFruit.bind(this, index)}>{index + 1}. {fruit}</li>)
            this.state.fruits.map((fruit, index) => <li key={index} onClick={this.removeFruit.bind(this, index)}>{index + 1}. {fruit}</li>)
          }
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    )
  }
}

export default AntiPattern;
