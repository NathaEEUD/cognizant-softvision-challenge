import { VStack, Heading, Text, Button } from '@chakra-ui/react'
import { ICandidate } from '@feature/candidate'
import { IColumn } from '@feature/column'
import CardNew from 'components/02_molecules/card-new/CardNew'
import Card from 'components/02_molecules/card/Card'
import React from 'react'

type Props = IColumn & {
  candidates: ICandidate[]
}

const Column: React.FC<Props> = ({ id, title, initial, candidates }) => {
  const [addingCandidate, setAddingCandidate] = React.useState(false)

  return (
    <VStack
      alignItems="center"
      bg="background.secondary"
      borderRadius="lg"
      minW={250}
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
      {addingCandidate && <CardNew setAddingCandidate={setAddingCandidate} />}
      {initial && !addingCandidate && (
        <Button colorScheme="teal" onClick={() => setAddingCandidate(true)}>
          Agregar Candidato{' '}
        </Button>
      )}
    </VStack>
  )
}

export default Column
