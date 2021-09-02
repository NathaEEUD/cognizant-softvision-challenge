import api from '@api/index'
import { Box, Center, Grid } from '@chakra-ui/react'
import { ICandidate } from '@feature/candidate'
import Column from '@organisms/column/Column'
import { columns } from 'feature/column'
import React from 'react'
import logo from '@assets/logo.png'
import { CandidatesActionKind, useCandidates } from '@feature/candidate/context'

function Dashboard() {
  const { state, dispatch } = useCandidates()

  React.useEffect(() => {
    async function getData() {
      const response = await api.candidates.list()

      dispatch({
        type: CandidatesActionKind.FETCH_SUCCESS,
        payload: response
      })
    }

    getData()
  }, [])

  return (
    <Box bg="background.primary" h="100vh" p={4} w="100%">
      <Center mb={8}>
        <img alt="Softvision" src={logo} width={320} />
      </Center>
      <Grid gap={6} templateColumns={`repeat(${columns.length}, 1fr)`}>
        {Boolean(columns.length) &&
          columns.map(column => {
            const candidates: ICandidate[] = state.candidates.filter(
              candidate => candidate.step_id === column.id
            )

            return (
              <Column key={column.id} {...column} candidates={candidates} />
            )
          })}
      </Grid>
    </Box>
  )
}

export default Dashboard
