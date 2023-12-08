
export async function getAllWineries(){
  const res = await fetch('/api/wineries')
  return res.json()
}

export async function getSingleWinery(id){
  const res = await fetch(`/api/wineries/${id}`)
  return res.json()
}