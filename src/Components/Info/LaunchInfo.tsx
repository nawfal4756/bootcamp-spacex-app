import React from 'react'
import { LaunchInfoQuery } from '../../generated/graphql'

interface Props {
    data: LaunchInfoQuery
}

const LaunchInfo: React.FC<Props> = ({data}) => {
    if (!data.launch) {
        return <div>No launch available</div>
    }
    
    return (
        <div>
            {data.launch.mission_name}
            {data.launch.rocket?.rocket_name}
        </div>
    )
}

export default LaunchInfo