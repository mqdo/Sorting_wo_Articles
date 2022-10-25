export default function sortingWithoutArticle(arr) {
  const articles = ["a", "an", "the"];
  let copycat = [];
  const archived = [];
  arr.forEach((element) => {
    let splitting = element.split(" ");
    articles.forEach((article) => {
      splitting.forEach((split, index) => {
        if (split.toLowerCase() === article) {
          archived.push({
            prefix: splitting.splice(index, 1),
            fullStr: element
          });
        }
      });
    });
    copycat.push(splitting.join(" "));
  });
  copycat = copycat.sort((a, b) => a.localeCompare(b));
  return copycat.map(copy => {
    archived.forEach(elem => {
      if (elem.fullStr.includes(copy)) {
        copy = elem.prefix + " " + copy;
      }
    })
    return copy;
  })
}
