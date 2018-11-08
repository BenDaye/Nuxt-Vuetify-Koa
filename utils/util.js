export const setVcodeTimer = (type, timer) => {
  localStorage[type] = timer
}

export const getVcodeTimer = type => {
  return localStorage[type] || null
}
