import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes'

export default makeStyles(theme => ({
    searchBox: {
        width: '343px',
        height: '48px',
        borderRadius: '7px',
        outlineColor: '#9badc9',
        [sizes.down("sm")]: {
            marginBottom: 16
        }
    },
    notchedOutline: {
        borderColor: '#E5ECF6'
    },
    label: {
        color: '#9badc9',
    },
    input: {
        fontFamily: 'Roboto',
        fontSize: '17px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.59',
        letterSpacing: '-0.24px',
        color: '#9BADC9',
    },
    top: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        [sizes.down("sm")]: {
            flexDirection: 'column'
        },
    },
    top2: {
        display: 'flex',
        justifyContent: 'space-between',
        [sizes.down("sm")]: {
            flexDirection: 'column'
        },
    },
    filtersContainer: {
        marginTop: 68
    },
    filtersHeading: {
        fontFamily: 'Roboto',
        fontSize: '17px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.29',
        letterSpacing: '-0.24px',
        color: '#061935',
        [sizes.down("sm")]: {
            display: 'none'
        },
    },
    filters: {
        marginTop: 0
    },
    selected: {
        backgroundColor: '#F3F5FA !important',
    },
    listItem: {
        width: '200px',
        height: '32px',
        borderRadius: '4px',
        marginLeft: 16,
    },
    primary: {
        width: '160px',
        height: '20px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.31',
        letterSpacing: '-0.2px',
        color: '#0a58ce',
    },
    listItemRoot: {
        fontSize: '32px',
    },
    iconRoot: {
        minWidth: 'initial'
    },
    sortby: {
        width: '256px',
        height: '48px',
        borderRadius: '7px',
        outlineColor: '#9badc9',
    },
    formField: {
        width: '100%',
        marginTop: 16
    }
}))