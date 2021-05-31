type DeckObject = {
  color: 1 | 2 | 3;
  quantity: 1 | 2 | 3;
  shape: 1 | 2 | 3;
  texture: 1 | 2 | 3;
};

export default function isSet(
  object1: DeckObject,
  object2: DeckObject,
  object3: DeckObject
) {
  const colors = [object1.color, object2.color, object3.color];
  const shapes = [object1.shape, object2.shape, object3.shape];
  const textures = [object1.texture, object2.texture, object3.texture];
  const quantity = [object1.quantity, object2.quantity, object3.quantity];

  const isColorValid = areAllDifferent(colors) || areAllEqual(colors);
  const isShapeValid = areAllDifferent(shapes) || areAllEqual(shapes);
  const isTextureValid = areAllDifferent(textures) || areAllEqual(textures);
  const isQuantityValid = areAllDifferent(quantity) || areAllEqual(quantity);
}
