import VMasker from "vanilla-masker";

const dateMask = value => {
  const rawValue = value.replace(/[/]/g, "");
  return rawValue.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
};

const cpfMask = value => {
  const rawValue = value.replace(/[-.]/g, "");
  return rawValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

const phoneMask = value => {
  const rawValue = value.replace(/[()\-\s]/g, "");
  if (rawValue.length < 11)
    return VMasker.toPattern(rawValue, "(99) 9999-9999");
  return VMasker.toPattern(rawValue, "(99) 99999-9999");
};

export const masks = {
  dateMask,
  cpfMask,
  phoneMask
};
