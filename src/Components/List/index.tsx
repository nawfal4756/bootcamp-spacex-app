import React from 'react'
import { useLaunchListQuery } from '../../generated/graphql'
import LaunchList from './LaunchList'

export default function LaunchListCountainer() {
    const {data, loading, error}  = useLaunchListQuery()

    if (loading) {
        return <div>Loading...</div>
    }
    
    if (error || !data) {
        return <div>ERROR</div>
    }

    <LaunchList data={data} />
}


