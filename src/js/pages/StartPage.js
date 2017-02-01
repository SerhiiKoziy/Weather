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
            nameArtist:'',
            currentCategory: 'all',
            currentEntity:'',
            limitList:'',

        }
    }

    componentDidMount() {

    }
    getMedia(str) {
        if (str.indexOf(' ') === -1) {
            return str.toLowerCase();
        }
        const sg = str.split(' ');
        return sg[0] + capitalize(sg[1]);
    }


    searchForm(){
        let {nameArtist, currentCategory, currentEntity, limitList} = this.state;
        let data = {nameArtist, currentCategory, currentEntity, limitList}
       // console.log('searchForm', data)
        this.props.actions.search(data);
    }

    saveName(e){
        let name = e.target.value

        this.setState({nameArtist:name});
    }
    saveLimit(e){
        let limit = e.target.value

        this.setState({limitList:limit});
    }


    render() {

        let currentCategory = this.state.currentCategory;
        let currentEntity = this.state.currentEntity;
        let searchingList;
        let isLoaded = this.props.data.isLoaded;
        let categories = this.props.data.categories;
        let categoriesEntities = this.props.data.categoriesEntities[currentCategory]


        if(isLoaded == true ){
            searchingList = this.props.data.result;
        }

        return (

            <div className={`page start-page ${this.state.isLoginOpened ? 'step2' : ''}`}>

                    <div className="search-form">
                        <h3>itunes search</h3>
                        <form onSubmit={(e)=>e.preventDefault()}>

                                <div className="input-box">
                                    <input
                                        type="text"
                                        onKeyUp={::this.saveName}
                                        placeholder="Artist name"
                                        autoFocus
                                    />
                                </div>
                                <div className="input-box">
                                    <input
                                        type="text"
                                        onKeyUp={::this.saveLimit}
                                        placeholder="Limit list"
                                        autoFocus
                                    />
                                </div>




                                <DropdownList
                                    name="currentCategory"
                                    data={categories}
                                    valueField="id"
                                    textField="name"
                                    placeholder="Category"
                                    defaultValue={'all'}
                                    onChange={value => this.setState({currentCategory: value, currentEntity:''})}

                                />
                                <DropdownList
                                    name="currentEntities"
                                    data={categoriesEntities}
                                    valueField="id"
                                    textField="name"
                                    placeholder="Category entity"
                                    defaultValue={"Category entity"}
                                    onChange={value => this.setState({currentEntity: value})}

                                />


                                <Button type={'white'}
                                    onClick={::this.searchForm}
                                    children="search"/>
                        </form>

                    </div>



                    <div className="search-list">

                        {
                             isLoaded == true &&(
                                <ul className=''>
                                    {
                                        searchingList.map((item, index) => {
                                        return (
                                            <li key = {index}>
                                                <a href={item.collectionViewUrl} target="_blank">
                                                    <div className="image-view">
                                                        <img  src={item.artworkUrl100.replace('100x100', '1200x1200') || item.artworkUrl100} alt="image"/>
                                                    </div>
                                                    <div className="about-view">
                                                        <h4>{item.trackName}</h4>
                                                        <div className="type-content">
                                                            <p><span>{item.artistName}</span></p>
                                                            <span>{item.kind}</span>
                                                        </div>
                                                        <div className="price-view">
                                                            {
                                                                item.price == 0 ? <p>free</p> : <p>${item.trackPrice}</p>
                                                            }

                                                            <p>{fecha.format(new Date(item.releaseDate), 'MMM D, YYYY')}</p>

                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                        })
                                    }
                                </ul>

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
