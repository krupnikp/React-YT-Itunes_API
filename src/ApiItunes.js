import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const ItunesApi = ({ dataItunes }) => {
    if (!dataItunes) {
        return (
            <div style={{marginBottom:'400px'}} className={'details cont'}>
                <div style={{display:'flex', width:'50px'}} className={"lds-ellipsis loadingAnim"}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
    return (
        <div style={{width: '50%', margin: '20px auto'}}>
            <div style={{width:'100%'}}  className='details'>
                <h4>{dataItunes.artistName}</h4>
                <div className={'details-box'}>
                    <a href={(dataItunes.trackViewUrl)}><img src={(dataItunes.artworkUrl100)} /></a>
                    <div className={'details-box-txt'}>
                        <p><FontAwesomeIcon icon='play' /> <span className={'details-box-txt-span'}>Track: </span>{dataItunes.trackName}</p>
                        <p><FontAwesomeIcon icon='compact-disc' /> <span className={'details-box-txt-span'}>Album: </span>{dataItunes.collectionName}</p>
                        <p><FontAwesomeIcon icon='music' /> <span className={'details-box-txt-span'}>Genre: </span>{dataItunes.primaryGenreName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItunesApi
