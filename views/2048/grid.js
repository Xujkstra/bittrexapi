export default class Grid {
  constructor(size = 4) {
    this.size = size
    this.cell = []
  }

  init() {
    for( let i = 0; i < this.size; i ++) {
      const row = this.cell[i] = []
      for( let j = 0; j < this.size; j++) {
        row.push(null)
      }
    }
  }

  eachCell(cb) {
    for( let i = 0; i < this.size; i ++) {
      for( let j = 0; j < this.size; j ++) {
        cb( i, j, this.cell[i][j])
      }
    }
  }

  availableCells() {
    const cells = []
    this.eachCell( (x, y, cell) => {
      if(!cell) {
        cells.push({ x, y })
      }
    })
    return cells
  }

  randomAvailableCell() {
    var cells = this.availableCells()
    if (cells.length) {
      return cells[Math.floor(Math.random() * cells.length)];
    }
  }

  
}