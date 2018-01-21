import React from 'react';
import ReactDOM from 'react-dom'
import Header from './components/Header';
import MainContent from './components/MainContent'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import AboutPage from './pages/AboutPage'
// first element is default view.


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brandText: 'MySite',
      currentPage: 'home',
      pages: [
        {
          key: 'home',
          label: 'Home',
          render: () => (<HomePage />)
        },
        {
          key: 'about',
          label: 'About',
          render: () => (<AboutPage />)
        }
      ],
      pageContent: ''
    }
    // add default page content
    this.state.pageContent = this.state.pages[0].render();
  }

  pageRender(key) {
    let page = this.state.pages.find((page) => page.key === key);
    if (!page) {
      return (<ErrorPage />)
    } else {
      return page.render();
    }
  }

  updatePage(key) {
    this.setState({
      currentPage: key,
      pageContent: this.pageRender(key)
    },
      () => { console.log(this.state); })
  }
  render() {
    return (
      <div>
        <Header brandText={this.state.brandText} navLinks={this.state.pages} pageChange={(pageKey) => { this.updatePage(pageKey) }} />
        <MainContent page={this.state.currentPage} pageContent={this.state.pageContent} />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
