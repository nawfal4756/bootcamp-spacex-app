import gql from 'graphql-tag'

export const QUERY_LAUNCH_INFO = gql `
    query launchInfo($id: String) {
        launch(id: $id) {
        mission_name
        launch_year
        flight_number
        rocket {
            rocket_name
        }
        launch_site {
            site_name
        }
        launch_success
        links {
            flickr_images
            youtube_id
            wikipedia
            video_link
        }
        }
    }
`