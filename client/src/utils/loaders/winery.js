
export async function getAllWineries(){
  const res = await fetch('http://localhost:3000/api/wineries')
  return res.json()
}

export async function getSingleWinery(id){
  const res = await fetch(`http://localhost:3000/api/wineries${id}`)
  return res.json()
}