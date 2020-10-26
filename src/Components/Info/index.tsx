import React from 'react'
import { useLaunchInfoQuery } from '../../generated/graphql'
import LaunchInfo from './LaunchInfo'

const LaunchInfoContainer = ({flightNumber}: any) =>  {
    const {data, error, loading} = useLaunchInfoQuery({ variables: {id: `${flightNumber}`}})
    
    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>ERROR</div>
    }

    if (!data) {
        return <div>Select a flight from the panel</div>
    }

    return <LaunchInfo data={data} />
}

export default LaunchInfoContainer