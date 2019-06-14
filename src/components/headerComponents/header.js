import React, { Component } from 'react';


class Header extends Component {
    constructor(props) {
		super(props);
		this.state = {};
		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
		this.setState({scroll: window.scrollY});
	}
  
  componentDidMount() {
		const el = document.querySelector('header');
		this.setState({top: el.offsetTop, height: el.offsetHeight});
		window.addEventListener('scroll', this.handleScroll);
	}
  render() {
      let linksMarkup = this.props.links.map((link,index) => {
        return(
         <li key={index}>
          <a className="scrollTo" href={link.link}>{link.lable}</a>
         </li>
        );
      });
    return (
      <header className={this.state.scroll > this.state.top ? "HeadFixed" : ""}>
        <div className="Headtop">
          <div className="row">
            <nav className="col12 txt-center">
                <ul className="Comul">
                    {linksMarkup}
                </ul>
            </nav>
          </div>
        </div>
        </header>
    );
  }
}
export default Header;