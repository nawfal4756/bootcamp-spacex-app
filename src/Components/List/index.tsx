import React from 'react'
import { useLaunchListQuery } from '../../generated/graphql'
import LaunchList from './LaunchList'

export default function LaunchListContainer() {
    const {data, loading, error}  = useLaunchListQuery()

    if (loading) {
        return <div>Loading...</div>
    }
    
    if (error || !data) {
        return <div>ERROR</div>
    }

    return <LaunchList data={data} />
}


