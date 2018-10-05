export const floodArea = (a, x, y) => {
  let ps = [{ x, y }]             //points to be flooded
  a = a.map(y => y.split(''))     //convert area to matrix
  
  while (ps.length) {
    let p = ps.pop()
    let x = p.x, y = p.y

    if (a[y] && a[y][x] == ' ') { //only blood if point is blank
      a[y][x] = '~'

      ps.push({ x: x - 1, y })    //setup next points
      ps.push({ x: x + 1, y })
      ps.push({ x, y: y - 1 })
      ps.push({ x, y: y + 1 })
    }
  }

  a = a.map(y => y.join(''))      //convert matrix back to area
  return a                        //return
}