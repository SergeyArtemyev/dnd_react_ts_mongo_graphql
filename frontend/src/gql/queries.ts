import { gql } from '@apollo/client';

export const getRaces = gql`
    query GetRaces {
        getRaces {
            ... on ErrorResult {
                message
            }
            ... on RacesArray {
                races {
                    id
                    racialTraits {
                        abscore
                        skills
                    }
                    description {
                        info
                        abScInc
                        age
                        alignment
                        size
                        speed
                        languages
                    }
                }
            }
        }
    }
`;
