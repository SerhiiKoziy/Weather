import React, {Component} from 'react';
import {Link} from 'react-router'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        //  this.store = this.props;
    }


    //
    // logout(e) {
    //   e.preventDefault();
    //   this.props.actions.logoutUser();
    // }

    render() {


        return (

                <nav className="top-nav">

                        <Link to='/' onlyActiveOnIndex={true} activeClassName='active'>Main</Link>

                </nav>

        );
    }
}
