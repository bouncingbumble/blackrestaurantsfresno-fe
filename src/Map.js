import React, { Component } from 'react'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'
import RoomIcon from '@material-ui/icons/Room';

const Mapbox = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoidHJhdmVsLWxlZnQiLCJhIjoiY2p4eG52c3l6MDFqZTNubW9qenNrZDFhdCJ9.ne7T4TNiRCFKihXfLusRqw'
});

class Map extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const coordinates = [this.props.coords.lng, this.props.coords.lat]
        return (
            <Mapbox
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '200px',
                    width: '100%',
                    borderRadius: 4,
                    marginBottom: 16
                }
                }
                center={coordinates}
            >
                <Marker
                    coordinates={coordinates}
                    offsetLeft={-10}
                    offsetTop={-30}
                >
                    <RoomIcon />
                </Marker>
            </Mapbox>
        )
    }
}

export default Map