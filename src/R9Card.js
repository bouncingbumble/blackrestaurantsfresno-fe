import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import PublicIcon from '@material-ui/icons/Public';
import RoomIcon from '@material-ui/icons/Room';
import Map from './Map'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        minWidth: 345,
        marginTop: 32,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        borderRadius: 4
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
}));

export default function R9Card(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {props.name.split(' ').map((n, i) => {
                            if (i < 2) {
                                return n.charAt(0)
                            }
                        })}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.name}
                subheader={props.typeOfFood}
            />
            <CardMedia
                className={classes.media}
                image={props.image}
            />
            <CardContent style={{ height: 60 }}>
                <Typography variant="body2" style={{ color: '#808080' }} component="p">
                    {props.description.substring(0, 128)}
                    {props.description.length > 127 ? '. . .' : ''}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" href={`tel:+1${props.number}`}>
                    <PhoneInTalkIcon />
                </IconButton>
                <IconButton aria-label="share" href={props.website} target="_blank">
                    <PublicIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <RoomIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Map coords={props.coords} />
                    <Typography variant="body2" style={{ color: "#808080" }}>{props.address}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
