export function areAllEqual(shape: Number, color: Number, filling: Number) {
  if (shape === color && shape === filling && filling === color) {
    return true;
  }
  return false;
}

export function areAllDifferent(shape: Number, color: Number, filling: Number) {
  if (shape !== color && shape !== filling && filling !== color) {
    return true;
  }
  return false;
}
