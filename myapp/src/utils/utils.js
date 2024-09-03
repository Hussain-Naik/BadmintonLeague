export const setLeagueToken = (data) => {
  localStorage.setItem('leagueToken', JSON.stringify(data))
}

export const reloadLeague = () => {
  return !!localStorage.getItem('leagueToken')
}

export const removeLeagueToken = () => {
  localStorage.removeItem('leagueToken')
}

export const setSessionToken = (data) => {
  localStorage.setItem('leagueSessionToken', JSON.stringify(data))
}

export const reloadSession = () => {
  return !!localStorage.getItem('leagueSessionToken')
}

export const removeSessionToken = () => {
  localStorage.removeItem('leagueSessionToken')
}

export const winPosition = (arg) => {
  if (arg % 2 === 0)
    return false
  else return true
}