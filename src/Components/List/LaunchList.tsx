import { AppBar, Divider, Drawer as MUIDrawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { LaunchListQuery } from '../../generated/graphql'
// import { useStyles } from './LaunchList.styles'

interface Props {
    data: LaunchListQuery;
}

const LaunchList: React.FC<Props> = ({data}) => {
  //const classes = useStyles()
  const [open, setOpen] = useState(false)

    
  return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">SpaceX App</Typography>
          </Toolbar>
          
        </AppBar>

        <MUIDrawer open>
          <List>
            {data.launches?.map((text, index) => {
              <div onClick={() => setOpen(false)}>
                <ListItem button key={index}>
                  <ListItemText>
                    <Typography>{text?.mission_name}</Typography>
                    <Typography>{text?.launch_year}</Typography>
                    <Typography>{text?.launch_success}</Typography>
                  </ListItemText>
                </ListItem>
                <Divider />
              </div>
            })}
          </List>
        </MUIDrawer>
      </div>
  )
}

export default LaunchList
