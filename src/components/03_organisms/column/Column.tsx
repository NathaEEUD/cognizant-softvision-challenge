import { VStack, Heading, Text, Button } from '@chakra-ui/react'
import { ICandidate } from '@feature/candidate'
import { IColumn } from '@feature/column'
import Card from 'components/02_molecules/card/Card'
import React from 'react'

type Props = IColumn & {
  candidates: ICandidate[]
}

const Column: React.FC<Props> = ({ id, title, initial, candidates }) => {
  return (
    <VStack
      alignItems="center"
      bg="background.secondary"
      borderRadius="lg"
      p={4}
      spacing={4}
    >
      <Heading as="h2" color="primary" size="md">
        {title}
      </Heading>
      {candidates.length === 0 ? (
        <Text fontSize="lg">No hay candidatos</Text>
      ) : (
        candidates.map(candidate => <Card key={candidate.id} {...candidate} />)
      )}
      {initial && <Button colorScheme="teal">Agregar Candidato </Button>}
    </VStack>
  )
}

export default Column
