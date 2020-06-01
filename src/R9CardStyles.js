import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes'

export default makeStyles(theme => ({
    tripCard: {
        mixBlendMode: 'multiply',
        borderRadius: theme.spacing(.5),
        boxShadow: '0 8px 16px 0 rgba(56, 96, 165, 0.15)',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    content: {
        padding: theme.spacing(2),
    },
    bottom: {
        height: theme.spacing(6.75),
        borderRadius: theme.spacing(.5),
        backgroundColor: '#e5ecf6',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        display: 'flex',
        justifyContent: 'space-between'
    },
    locationDateContainer: {
        display: 'flex',
        width: 200,
    },
    vl: {
        width: '2px',
        height: '20px',
        backgroundColor: theme.palette.grey[200],
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    chipLabel: {
        fontFamily: 'Roboto',
        fontSize: '11px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: '0.06px',
        textAlign: 'right',
        color: '#FFFFFF',
        paddingLeft: '13.5px',
        paddingRight: '13.5px',
        textTransform: 'capitalize'
    },
    input: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        color: '#9BADC9',
    },
    todoBox: {
        width: '143px',
        borderRadius: '7px',
        outlineColor: '#9badc9',
        [sizes.down("sm")]: {
            marginBottom: 16
        },
        marginLeft: 8
    },
    label: {
        color: '#9badc9',
    },
    todosHeader: {
        display: 'flex',
        alignItems: 'center'
    },
    todoAndDragonDropContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    todosContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        flexDirection: 'row',
        paddingLeft: 16,
        width: 400,
        marginBottom: 16
    },
    row: {
        display: 'flex',
        marginBottom: theme.spacing(2),
        justifyContent: 'space-between',
    },
    actionButton: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.31',
        letterSpacing: '-0.2px',
        textTransform: 'none'
    },
    attachmentsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        flexDirection: 'row',
        paddingLeft: 16,
        width: 600
    }
}))