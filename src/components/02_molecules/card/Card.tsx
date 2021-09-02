import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, IconButton, Text } from '@chakra-ui/react'
import { ICandidate } from '@feature/candidate'
import { CandidatesActionKind, useCandidates } from '@feature/candidate/context'
import React from 'react'

type Props = ICandidate

const Card: React.FC<Props> = props => {
  const { dispatch } = useCandidates()

  return (
    <Box bg="background.tertiary" borderRadius="md" p={4} w="100%">
      <Heading mb={2} size="md">
        {props.name}
      </Heading>
      {props.comments && (
        <Text fontSize="lg" mb={4}>
          {props.comments}
        </Text>
      )}
      <HStack>
        <IconButton
          aria-label="Move previous"
          colorScheme="teal"
          flex="1"
          icon={<ArrowLeftIcon />}
          isDisabled={props.step_id <= 1}
          size="sm"
          variant="outline"
          onClick={() =>
            dispatch({
              type: CandidatesActionKind.MOVE,
              payload: { id: props.id, step_id: props.step_id - 1 }
            })
          }
        />
        <IconButton
          aria-label="Move forward"
          colorScheme="teal"
          flex="1"
          icon={<ArrowRightIcon />}
          isDisabled={props.step_id >= 5}
          size="sm"
          variant="outline"
          onClick={() =>
            dispatch({
              type: CandidatesActionKind.MOVE,
              payload: { id: props.id, step_id: props.step_id + 1 }
            })
          }
        />
      </HStack>
    </Box>
  )
}

export default Card
