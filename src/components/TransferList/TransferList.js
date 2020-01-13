import React, { useEffect } from 'react';
import { useForm } from 'react-final-form';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
    },
    cardHeader: {
        padding: theme.spacing(1, 2),
    },
    list: {
        width: 200,
        height: 230,
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
    },
    button: {
        margin: theme.spacing(0.5, 0),
    },
}));

function not(a, b) {
    return a.filter(itemA => !b.find(itemB => itemA.entity_id === itemB.entity_id));
}

function intersection(a, b) {
    return a.filter(itemA => !!b.find(itemB => itemA.entity_id === itemB.entity_id));
}

function union(a, b) {
    return [...a, ...not(b, a)];
}

function TransferList({ files }) {

    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([]);
    const [right, setRight] = React.useState([]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);
    
    useEffect(() => {
        files && setLeft(files)
        
    }, [files])

    useEffect(() => {
        const rightIds = right.map(item => item.entity_id)
        form.change('selectedFiles', rightIds);
    }, [right])

    const form = useForm();

    const handleToggle = item => () => {
        const currentItem = checked.find(checkedItem => checkedItem.entity_id === item.entity_id);
        const newChecked = [...checked];

        if (!currentItem) {
            newChecked.push(item);
            setChecked(newChecked);
        } else {
            const checkedFiltered = newChecked.filter(checkedItem => checkedItem.entity_id !== item.entity_id)
            setChecked(checkedFiltered)
        }
    };

    const numberOfChecked = items => intersection(checked, items).length;

    const handleToggleAll = items => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
        
    };

    
    console.log("::: right :::", right)


    const customList = (title, items) => (
        <Card>
            <CardHeader
                className={classes.cardHeader}
                avatar={
                    <Checkbox
                        onClick={handleToggleAll(items)}
                        checked={numberOfChecked(items) === items.length && items.length !== 0}
                        indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
                        disabled={items.length === 0}
                        inputProps={{ 'aria-label': 'all items selected' }}
                    />
                }
                title={title}
                subheader={`${numberOfChecked(items)}/${items.length} selected`}
            />
            <Divider />
            <List className={classes.list} dense component="div" role="list">
                {items.map(item => {
                    const labelId = `transfer-list-all-item-${item.entity_id}-label`;

                    return (
                        <ListItem key={item.entity_id} role="listitem" button onClick={handleToggle(item)}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={!!checked.find(checkedItem => checkedItem.entity_id === item.entity_id)}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={item.name} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Card>
    );

    return (
        <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
            <Grid item>{customList('Todos os arquivos', left)}</Grid>
            <Grid item>
                <Grid container direction="column" alignItems="center">
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
          </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
          </Button>
                </Grid>
            </Grid>
            <Grid item>{customList('Arquivos selecionados', right)}</Grid>
        </Grid>
    );
}

export default TransferList;