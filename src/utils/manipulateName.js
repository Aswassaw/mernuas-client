export const manipulateName = (name, higherThan) => {
  if (name.length > higherThan) {
    let nameArray = name.split(' ')
    let abbreviation = ""
    let abbreviationArray = [];

    for (let i = 0; i < nameArray.length - 1; i++) {
      abbreviation = nameArray[i + 1].slice(0, 1);
      abbreviationArray.push(abbreviation);
    }
    return `${nameArray[0] + ' ' + abbreviationArray.join('.')}`;
  }

  return name;
}