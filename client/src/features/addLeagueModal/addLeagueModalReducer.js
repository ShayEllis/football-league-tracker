// Initial state for addLeagueModal form
const initialState = {
  leagueName: '',
  teamName: '',
  teamCount: '',
  platform: '',
  draftDate: '',
  buyIn: '',
  draftRank: '',
  teamRank: '',
  playoffTeams: '',
  payout1: '',
  payout2: '',
  payout3: '',
}

// Reducer for addLeagueModal form
const addLeagueModalReducer = (state, action) => {
  // Convert HTML input name to camelCase
  const camelCaseInputName = action.payload.inputName.replace(
    /-+([\w])/gi,
    (match, p1) => {
      return p1.toUpperCase()
    }
  )
  // Use switch with computed property value to modify the form state
  switch (action.type) {
    case 'input-change': {
      return {
        ...state,
        [camelCaseInputName]: action.payload.value,
      }
    }
    default: {
      console.warn(`"${action.type}" does not match a reducer action`)
      return { ...state }
    }
  }
}

export { initialState, addLeagueModalReducer }
