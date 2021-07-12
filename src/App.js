import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Login from './Components/Login'
import {connect} from 'react-redux'
import './App.css';

function App(props) {
  let {setUser} = props
  const isUser = setUser;
  return (
    <div className="App">
      {!setUser ? (
        <Login />
      ) : (
        <div>
          <Header />
          <Body />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state=>{
  return {
    setUser: state.user
  }
}

export default connect(mapStateToProps)(App);
