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
  // Use switch with computed property value to modify the form state
  switch (action.type) {
    case 'input-change': {
      // Convert HTML input name to camelCase
      const camelCaseInputName = action.payload.inputName.replace(
        /-+([\w])/gi,
        (match, p1) => {
          return p1.toUpperCase()
        }
      )
      return {
        ...state,
        [camelCaseInputName]: action.payload.value,
      }
    }
    case 'reset-form': {
      return initialState
    }
    default: {
      console.warn(`"${action.type}" does not match a reducer action`)
      return { ...state }
    }
  }
}

export { initialState, addLeagueModalReducer }
