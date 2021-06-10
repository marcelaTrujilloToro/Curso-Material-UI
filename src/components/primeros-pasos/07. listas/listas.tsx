import React from 'react';

import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import DeckIcon from '@material-ui/icons/Deck';
import AllInclusiveSharpIcon from '@material-ui/icons/AllInclusiveSharp';

export const ListasMaterialUI = () => {
    return (
        <div>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText>Item 1</ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <DeckIcon/>
                    </ListItemIcon>
                    <ListItemText>Item 2</ListItemText>
                </ListItem>

                <Divider/>
                <ListItem button>
                    <ListItemIcon >
                        <AllInclusiveSharpIcon color="primary"/>
                    </ListItemIcon>
                    <ListItemText>Item 3</ListItemText>
                </ListItem>
            </List>
        </div>
    )
}
