import { Button, chakra, HStack, Input, VStack } from '@chakra-ui/react'
import { CandidatesActionKind, useCandidates } from '@feature/candidate/context'
import React from 'react'

type Props = {
  setAddingCandidate: (arg0: boolean) => void
}

const CardNew: React.FC<Props> = ({ setAddingCandidate }) => {
  const [name, setName] = React.useState('')
  const [comments, setComments] = React.useState('')
  const { dispatch } = useCandidates()

  const onFormSubmit = () => {
    dispatch({
      type: CandidatesActionKind.ADD,
      payload: {
        id: name.toLowerCase().replace(/ /g, '-'),
        name,
        comments,
        step_id: 1,
        step: 'Entrevista inicial'
      }
    })
    setName('')
    setComments('')
    setAddingCandidate(false)
  }

  return (
    <chakra.form w="100%" onSubmit={onFormSubmit}>
      <VStack
        bg="background.tertiary"
        borderRadius="md"
        p={4}
        spacing={4}
        w="100%"
      >
        <Input
          placeholder="Name"
          variant="filled"
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder="Comments"
          variant="filled"
          onChange={e => setComments(e.target.value)}
        />
        <HStack w="100%">
          <Button
            colorScheme="red"
            flex="1"
            size="sm"
            variant="outline"
            onClick={() => setAddingCandidate(false)}
          >
            Cancelar
          </Button>
          <Button
            colorScheme="teal"
            flex="1"
            isDisabled={!name}
            size="sm"
            type="submit"
          >
            Guardar
          </Button>
        </HStack>
      </VStack>
    </chakra.form>
  )
}

export default CardNew
