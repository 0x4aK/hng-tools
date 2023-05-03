const ID_TO_TOWN = {
  0: "town",
  1: "mountain",
  2: "factory",
  3: "airfield",
  4: "airfield",
};

export const id_to_name = (id) => {
  return ID_TO_TOWN[id];
};
