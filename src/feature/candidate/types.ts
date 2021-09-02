export interface ICandidate {
  id: string
  name: string
  step_id: number
  step:
    | 'Entrevista inicial'
    | 'Entrevista técnica'
    | 'Oferta'
    | 'Asignación'
    | 'Rechazo'
  comments: string
}
