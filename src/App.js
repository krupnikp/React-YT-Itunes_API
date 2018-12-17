import React, { Component } from 'react';
import './App.scss';

import ItunesApi from './ApiItunes.js'
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo, faPlay, faCompactDisc, faMusic } from '@fortawesome/free-solid-svg-icons'
library.add(faIgloo, faPlay, faCompactDisc, faMusic)


const API_KEY = 'AIzaSyDH9ptP2jv74rJHOsy7jwwi0K4onZqfLtU';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVideo: null,
            description: null
        };

        this.searchYoutube('oavMtUWDBTM');
        this.searchItunes('trololo-song-single')

    }

    videoSearch = _.debounce((term) => { this.searchYoutube(term); this.searchItunes(term) }, 500);



    searchItunes(term) {
        fetch(`https://itunes.apple.com/search?term=${term}&entity=song`)
            .then(r => r.json())
            .then(response => {
                const data = response.results;
                console.log(data)
                this.setState({
                    description: data[0],
                })
            })
    }

    searchYoutube(term) {
        YTSearch({ key: API_KEY, term: term}, (videos) => {
                this.setState({
                    selectedVideo: videos[0]
                });
        });
    }



    render() {

        if(!this.state.selectedVideo && !this.state.description) {
            return (
                <div style={{height:'800px'}} className={'cont'}>
                    <SearchBar onChange={(searchTerm) => {this.videoSearch(searchTerm)}} />
                    <div style={{height:'50px'}} className="details">
                        <p style={{textAlign:'center'}}>We didn't find what you're looking for.</p>
                    </div>
                </div>
            )
        }

        return (
            <div className="cont" >
                {/*<NavBar />*/}
                <div>
                    {console.log(this.state.selectedVideo)}
                    <SearchBar onChange={(searchTerm) => {this.videoSearch(searchTerm)}} />
                            <VideoPlayer video={this.state.selectedVideo} />
                            <ItunesApi dataItunes={this.state.description} />
                </div>
            </div>
        );
    }

}

export default App;
