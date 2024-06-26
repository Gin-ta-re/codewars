// "Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.

// Task
// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

//My solution

function symmetricPoint(p, q) {
    const [xp, yp] = p
    const [xq, yq] = q
    const xDistance = (xp - xq) * - 1;
    const yDistance = (yp - yq) * - 1;
    return [
      xq + xDistance,
      yq + yDistance
    ]
  }