import { Record } from 'immutable'
import { COLUMNS, ROWS } from 'constants'

class Cell extends Record({
  column: undefined,
  row: undefined,
  type: 'wall'
}) {
  get id () {
    return `${this.row}-${this.column}`
  }

  getNorth () {
    if (this.row === 0) { return null }
    return `${this.row - 1}-${this.column}`
  }

  getSouth () {
    if (this.row === (ROWS - 1)) { return null }
    return `${this.row + 1}-${this.column}`
  }

  getWest () {
    if (this.column === 0) { return null }
    return `${this.row}-${this.column - 1}`
  }

  getEast () {
    if (this.column === (COLUMNS - 1)) { return null }
    return `${this.row}-${this.column + 1}`
  }
}

export default Cell
