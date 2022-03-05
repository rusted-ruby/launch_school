//provide an acronym for the string you pass in. dashes should be separaet words
//could split these up with a regex that looks for spaces and dahses. then iterate 
//through the array to take the first char of every word...

function acronym(string) {
  //one or more non-word character
  let regex = /\W+/
  let arr = string.split(regex);
  let result = arr.map((element) => {
    return element[0].toUpperCase()
  })
  result = result.join('')
  console.log(result);
  return result
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"

//what did LS do? used a simple regex to replace all dashes with spaces, then just split on 
//spaces and iterate like I did.