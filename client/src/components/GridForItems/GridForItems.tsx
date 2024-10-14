import { Container, SimpleGrid } from "@mantine/core"
import React from "react"

export const GridForItems = (props) => {
    return (
            <Container>
                <SimpleGrid
                    mt={5}
                    cols={{ base: 1, sm: 2, md: props.count }}
                    spacing={{ base: 'xl', md: 50 }}
                    verticalSpacing={{ base: 'md', md: 20 }}
                >
                    {props.data}
                </SimpleGrid>
            </Container>
    )
}