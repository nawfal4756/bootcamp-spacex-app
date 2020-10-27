import React from 'react'
import { useQuery } from '@apollo/client'
import { LaunchListQuery } from '../../generated/graphql'
import LaunchList from './LaunchList'
import { QUERY_LAUNCH_LIST } from './query'

export default function LaunchListContainer(props: any) {
    const {data, loading, error}  = useQuery<LaunchListQuery>(QUERY_LAUNCH_LIST)
    

    return <LaunchList data={data} {...props}  loading={loading} error={error} />
}


