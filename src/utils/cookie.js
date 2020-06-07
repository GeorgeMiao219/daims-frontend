
function get (key) {
  let got = localStorage[key]
  if (!got) return []
  else return JSON.parse(got)
}

function set (key, value) {
  localStorage[key] = JSON.stringify(value)
}

export {get, set};