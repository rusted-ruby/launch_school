let taxes = [
  'Kingdom',
  'Phylum',
  'Class',
  'Order',
  'Family',
  'Genus',
  'Species'
];
let obj = {}
let trs = document.querySelectorAll('.infobox td');
for (i = 0; i < trs.length; i += 1) {
  let ele = trs[i];
  let text = ele.textContent.trim()
  taxes.forEach((tax) => {
    if (text.indexOf(tax) !== -1) {
      obj[tax] = trs[i + 1].textContent.trim()
    }
  })
}
console.log(obj)
