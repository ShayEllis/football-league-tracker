const stateInitializer = (initialState) => {
  const inputsToCorrect = ['buyIn', 'payout1', 'payout2', 'payout3']
  let correctedState = Object.keys(initialState).reduce((obj, key) => {
    if (initialState[key]) {
      if (key === 'draftDate') {
        const date = new Date(initialState.draftDate)
        const year = date.getFullYear().toString()
        const month = date.getMonth().toString().padStart(2, 0)
        const day = date.getDay().toString().padStart(2, 0)
        const formDraftDate = `${year}-${month}-${day}`
        return { ...obj, [key]: formDraftDate }
      } else if (inputsToCorrect.includes(key)) {
        const inputValue = initialState[key].replace(/[$,]/g, '')
        return { ...obj, [key]: inputValue }
      }
    }
    return { ...obj, [key]: initialState[key] }
  }, {})
  return correctedState
}

// Reducer for addLeagueModal form
const editLeagueModalReducer = (state, action) => {
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
    default: {
      console.warn(`"${action.type}" does not match a reducer action`)
      return { ...state }
    }
  }
}

export { editLeagueModalReducer, stateInitializer }
