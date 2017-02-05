import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fecha from 'fecha';
import Button from '../components/Button/Button';
import Spinner from '../components/Spinner/Spinner';
import DropdownList from 'react-widgets/lib/DropdownList';


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};
@connect(mapStateToProps, mapDispatchToProps)
export default class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
      this.getCoordinates();
    }

    getCoordinates(){

      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log(lat, lon);

        this.props.actions.receiveCoordinates({lat, lon})
        this.props.actions.getWatherToCoordinates1(this.props.data);

      })


    }


    forecastForCity(){
      this.props.actions.getWatherForecast(this.props.data);
    }





    render() {


        let isLoaded = false;




        return (

            <div className={`page start-page ${this.state.isLoginOpened ? 'step2' : ''}`}>

                    <div className="search-form">
                        <h3>weather search</h3>
                        <div>
                            <div>
                                <input id="" name="" placeholder="Your city"/>
                            </div>
                          <button onClick={::this.forecastForCity}>forecastForCity</button>
                        </div>



                    </div>



                    <div className="search-list">

                        {
                             isLoaded == true &&(
                               <div>


                               </div>

                            )
                        }
                        {
                            isLoaded == false &&(
                                <Spinner></Spinner>

                            )
                        }
                        {
                            isLoaded == "wasLoad" &&(
                               <p>
                                   iTunes doesn't have this content. Please, try other categories.
                               </p>

                            )
                        }
                        {
                            isLoaded == "needName" &&(
                                <p>
                                    Search field is not filled. Please, write something.
                                </p>

                            )
                        }

                    </div>

                </div>

        )
    }
};
