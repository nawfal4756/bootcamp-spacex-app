import { List, ListItem, ListItemText } from '@material-ui/core'
import React, { useState } from 'react'
import { LaunchListQuery } from '../../generated/graphql'
import { useStyles } from './LaunchList.styles'

interface Props {
    data: LaunchListQuery;
}

const LaunchList: React.FC<Props> = ({data}) => {
    const classes = useStyles()
    const [mobile, setMobile] = useState(false)

    function handleDrawerToggle() {
        setMobile(!mobile)
    }

    const drawer = (
        <div>
          <List>
            {data.launches.map((text, index) => (
              <ListItem button key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );

    return (
        <div>
            
        </div>
    )
}

export default LaunchList
