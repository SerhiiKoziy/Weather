import React, {Component} from 'react';
import NavBar from '../components/NavBar/NavBar'


export default class Root extends Component {
    constructor(props) {
        super(props);
        // this.store = this.props.store;
    }
    
    render() {
        return (
            <div className="root">
                {/*<NavBar></NavBar>*/}

                <div className="route-wr">
                    {this.props.children}
                </div>

            </div>
        );
    }
}
// <NavBar />
