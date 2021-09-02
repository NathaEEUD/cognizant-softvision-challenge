import { ICandidate } from '@feature/candidate'
import { candidates } from '@feature/candidate/config'

export default {
  candidates: {
    list: (): Promise<ICandidate[]> => Promise.resolve(candidates)
  }
}
