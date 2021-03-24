export const Utils = {
  getStartCoord() {
    const getRandom = () => {
      return Math.ceil(Math.random() * 3);
    };
    const startCoord = [];
    startCoord.push(getRandom());
    startCoord.push(getRandom());
    return startCoord;
  },
  getStartId(startCoord, cells) {
    let startId;
    for (let i = 0; i < cells.length; i++) {
      if (
        cells[i].coord[0] === startCoord[0] &&
        cells[i].coord[1] === startCoord[1]
      ) {
        startId = cells[i].id;
        return startId;
      }
    }
  },

  getMoves(currentCell, moves) {
    const getMove = (currentCell, moves) => {
      let move = [0, 0];
      let word = "";
      const randomAxis = () => {
        if (Math.random() < 0.5) {
          return 1;
        } else {
          return 0;
        }
      };
      const randomDirection = () => {
        if (Math.random() < 0.5) {
          return 1;
        } else {
          return -1;
        }
      };

      let axis = randomAxis();
      if (currentCell[axis] === 3) {
        move[axis] = -1;
      } else if (currentCell[axis] === 1) {
        move[axis] = 1;
      } else {
        move[axis] = 1 * randomDirection();
      }
      currentCell[axis] = currentCell[axis] + move[axis];
      switch (move.join()) {
        case "0,1":
          word = "Вправо";
          break;
        case "1,0":
          word = "Вниз";
          break;
        case "-1,0":
          word = "Вверх";
          break;
        case "0,-1":
          word = "Влево";
          break;
        default:
          return "";
      }

      moves.push(word);

      return moves;
    };

    for (let i = 0; i < 10; i++) {
      getMove(currentCell, moves);
    }
  },
};
