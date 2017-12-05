let input = 325489

let matrix = new Array(20)
for (let i = 0; i < 20; i++) {
    matrix[i] = new Array(20)

    for (let j = 0; j < 20; j++) {
        matrix[i][j] = 0
    }
}

var sumNeighbours = function(x, y) {
    return matrix[x][y] +  matrix[x + 1][y] + matrix[x + 1][y - 1] + matrix[x][y - 1] + matrix[x - 1][y - 1] + matrix[x - 1][y] + matrix[x - 1][y + 1] + matrix[x][y + 1] + matrix[x + 1][y + 1]
}

var coordinatesFromIndex = function(index) {
    if (index == 1) {
        return [0, 0]
    }

    let bottomRightCorner = 9
    let edgeSize = 3

    let x, y

    while (bottomRightCorner < index) {
        edgeSize += 2
        bottomRightCorner = edgeSize * edgeSize
    }

    let topRightCorner = bottomRightCorner - edgeSize - (edgeSize - 1) - ((edgeSize - 2) * 2) + (edgeSize - 2)
    let topLeftCorner = topRightCorner + (edgeSize - 1)
    let bottomLeftCorner = topLeftCorner + (edgeSize - 1)
    let dist = ((edgeSize - 1) / 2)

    if (index == bottomRightCorner) {
        return [dist, dist]
    } else if (index < topRightCorner) {
        return [dist, dist - (edgeSize - (topRightCorner - index + 1))]
    } else if (index == topRightCorner) {
        return [dist, -dist]
    } else if (index < topLeftCorner) {
        return [dist - (edgeSize - (topLeftCorner - index + 1)), -dist]
    } else if (index == topLeftCorner) {
        return [-dist, -dist]
    } else if (index < bottomLeftCorner) {
        return [-dist, -(dist - (edgeSize - (bottomLeftCorner - index + 1)))]
    } else if (index == bottomLeftCorner) {
        return [-dist, dist]
    } else if (index < bottomRightCorner) {
        return [-(dist - (edgeSize - (bottomRightCorner - index + 1))), dist]
    }
}

matrix[10][10] = 1
for (let i = 1; i < 400; i++) {
    let coords = coordinatesFromIndex(i)
    result = sumNeighbours(10 + coords[1], 10 + coords[0])
    matrix[10 + coords[1]][10 + coords[0]] = result

    if (result > input) {
        console.log(result)
        break
    }
}