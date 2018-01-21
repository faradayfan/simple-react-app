import React from 'react';
import ReactDOM from 'react-dom'
import Header from './components/Header';
import MainContent from './components/MainContent'

// first element is default view.


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '',
      navLinks: [
        {
            key: 'home',
            label: 'Home'
        },
        {
            key: 'profile',
            label: 'Profile'
        },
        {
            key: 'about',
            label: 'About'
        }
    ]
    }
  }

  onPageChange(key) {
    this.setState({ currentPage: key })
    console.log(key);
  }

  render() {
    return (
      <div>
        <Header navLinks={this.state.navLinks} pageChange={(pageKey) => { this.onPageChange(pageKey) }} />
        <MainContent page={this.state.currentPage} />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
