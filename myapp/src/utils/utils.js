export const setLeagueToken = (data) => {
  localStorage.setItem('leagueToken', data)
}

export const reloadLeague = () => {
  return !!localStorage.getItem('leagueToken')
}

export const removeLeagueToken = () => {
  localStorage.removeItem('leagueToken')
}

export const setSessionToken = (data) => {
  localStorage.setItem('leagueSessionToken', data)
}

export const reloadSession = () => {
  return !!localStorage.getItem('leagueSessionToken')
}

export const removeSessionToken = () => {
  localStorage.removeItem('leagueSessionToken')
}