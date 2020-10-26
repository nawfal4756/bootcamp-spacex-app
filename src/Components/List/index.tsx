import React from 'react'
import { useQuery } from '@apollo/client'
import { LaunchListQuery } from '../../generated/graphql'
import LaunchList from './LaunchList'
import { QUERY_LAUNCH_LIST } from './query'

export default function LaunchListContainer(props: any) {
    const {data, loading, error}  = useQuery<LaunchListQuery>(QUERY_LAUNCH_LIST)

    if (loading) {
        return <div>Loading...</div>
    }
    
    if (error || !data) {
        return <div>ERROR</div>
    }
    

    return <LaunchList data={data} {...props} />
}


