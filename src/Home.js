import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography';
import R9Card from './R9Card';
import { v4 as getId } from 'uuid'
import useStyles from "./HomeStyles"
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { apiCall, externalApiCall } from './api';
import { getCurrentPosition } from "./utils";

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default function Tasks() {
    const classes = useStyles();

    const [r9s, setR9s] = React.useState([])
    const [isFormOpen, setIsFormOpen] = React.useState(false)
    const [showClosestToMeFirst, setShowClosestToMeFirst] = React.useState(true)
    const [types, setTypes] = React.useState([])
    const [newR9Submitted, setNewR9Submitted] = React.useState(false)
    const [coords, setCoords] = React.useState({})
    const [newR9, setR9] = React.useState({
        name: '',
        website: '',
        number: '',
        address: '',
        typeOfFood: '',
        image: '',
        description: ''
    })
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const fetchCoordinates = async () => {
        try {
            const { coords } = await getCurrentPosition();
            const { latitude, longitude } = coords;
            console.log(latitude)
            console.log(longitude)
            return { long: longitude, lat: latitude }
            // Handle coordinates
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };

    useEffect(() => {
        getR9s()

    }, []);

    const getR9s = async () => {
        const r9s = await apiCall('get', '/r9s')
        console.log(r9s)
        const apiKey = 'AIzaSyAlh7AO0HX0proJsysXARnWpxcJDMGcH6Y'

        const r9sWithCoordinates = await Promise.all(r9s.map(async r9 => {
            const delimittedString = r9.address.replace(' ', '+')

            try {
                const response = await externalApiCall('get', `https://maps.googleapis.com/maps/api/geocode/json?address=${delimittedString}&key=${apiKey}`)
                console.log(response)

                //{lat: num, lng: num}
                r9.coords = response.results[0].geometry.location

                console.log(r9.coords)
            } catch (err) {
                console.log(err)
            }

            return r9
        }))

        console.log(r9sWithCoordinates)


        let r9sWithDistanceToUser = await Promise.all(r9sWithCoordinates.map(async r => {
            try {
                const coords = await fetchCoordinates()
                console.log(coords)
                r.distanceToUser = distanceInKmBetweenEarthCoordinates(coords.lat, coords.long, r.coords.lat, r.coords.lng)
                return r
            } catch (err) {
                console.log(err)
                return r
            }
        }))

        console.log(r9sWithDistanceToUser)
        r9sWithDistanceToUser.sort((a, b) => (a.distanceToUser > b.distanceToUser) ? 1 : -1)

        shuffle(r9sWithDistanceToUser)
        setR9s(r9sWithDistanceToUser)

        let foodTypes = []
        r9s.forEach(r => {
            if (!foodTypes.includes(r.typeOfFood)) {
                foodTypes.push(r.typeOfFood.toLowerCase())
            }
        })
        setTypes(foodTypes)
        setFoodType(foodTypes)
    }

    const handleR9Submit = async () => {
        try {
            console.log(newR9)
            const response = await apiCall('post', '/r9s', newR9)
            console.log(response)
            setR9({
                name: '',
                website: '',
                number: '',
                address: '',
                typeOfFood: '',
                image: '',
                description: ''
            })
            setNewR9Submitted(true)
        } catch (err) {
            console.log(err)
        }
    }

    const degreesToRadians = degrees => {
        return degrees * Math.PI / 180;
    }

    const distanceInKmBetweenEarthCoordinates = (lat1, lon1, lat2, lon2) => {
        console.log(lat1)
        console.log(lon1)
        console.log(lat2)
        console.log(lon2)

        var earthRadiusKm = 6371;

        var dLat = degreesToRadians(lat2 - lat1);
        var dLon = degreesToRadians(lon2 - lon1);

        lat1 = degreesToRadians(lat1);
        lat2 = degreesToRadians(lat2);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadiusKm * c;
    }

    const [foodTypes, setFoodType] = React.useState([]);

    const handleChange = (event) => {
        setFoodType(event.target.value);
    };

    const handleFormChange = e => {
        setR9({
            ...newR9,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className={classes.top} style={{ justifyContent: 'space-between' }}>
                    {/* <FormControl className={classes.formControl} style={{
                        maxWidth: 345,
                        minWidth: 345,
                    }}>
                        <InputLabel id="demo-mutiple-checkbox-label">Sort by type of food</InputLabel>
                        <Select
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            value={foodTypes}
                            onChange={handleChange}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {types.map(type => (
                                <MenuItem key={type} value={type}>
                                    <Checkbox checked={foodTypes.indexOf(type) > -1} />
                                    <ListItemText primary={type} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl> 
                    <FormControlLabel
                        control={<Checkbox checked={showClosestToMeFirst} onChange={() => setShowClosestToMeFirst(!showClosestToMeFirst)} />}
                        label="Show closest to me first (requires location services)"
                        style={{ marginTop: 16 }}
                    />*/}
                </div>
                <div className='r9s' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', }}>
                    {r9s.length > 0 ? r9s.map(r9 => {
                        if (foodTypes.includes(r9.typeOfFood.toLowerCase())) {
                            return <R9Card {...r9}></R9Card>
                        }
                    }) : 'Loading . . .'}
                </div>
                <div className="footer" style={{ display: 'flex', justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
                    <form  >
                        {newR9Submitted && <Typography variant="body2">Your restaurant has been submitted. It will be added pending review. </Typography>}
                        {isFormOpen && <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Name"
                                placeholder=""
                                variant="outlined"
                                className={classes.formField}
                                value={newR9.name}
                                onChange={handleFormChange}
                                name="name"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Website"
                                placeholder=""
                                variant="outlined"
                                className={classes.formField}
                                value={newR9.website}
                                onChange={handleFormChange}
                                name="website"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Image link"
                                placeholder=""
                                variant="outlined"
                                className={classes.formField}
                                value={newR9.image}
                                onChange={handleFormChange}
                                name="image"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Phone"
                                placeholder=""
                                variant="outlined"
                                className={classes.formField}
                                value={newR9.number}
                                onChange={handleFormChange}
                                name="number"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Address"
                                placeholder=""
                                variant="outlined"
                                className={classes.formField}
                                value={newR9.address}
                                onChange={handleFormChange}
                                name="address"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Type of food"
                                placeholder=""
                                variant="outlined"
                                className={classes.formField}
                                value={newR9.typeOfFood}
                                onChange={handleFormChange}
                                name="typeOfFood"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Description"
                                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                variant="outlined"
                                className={classes.formField}
                                value={newR9.description}
                                onChange={handleFormChange}
                                name="description"
                            />
                        </div>
                        }
                        {isFormOpen ?
                            <Button variant="contained" color="primary" disableRipple style={{ marginTop: 16 }} onClick={handleR9Submit}>
                                Submit
                            </Button> :
                            <Button variant="contained" color="primary" disableRipple onClick={() => setIsFormOpen(true)}>
                                Add Restaurant
                    </Button>
                        }
                    </form>
                </div>
            </Grid>
        </Grid >
    )
}


