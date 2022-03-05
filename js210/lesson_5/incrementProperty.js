function incrementProperty(obj, prop){
  let properties = Object.keys(obj);
  if (properties.includes(prop)) {
    obj[prop] += 1;
  } else {
    obj[prop] = 1;
  }
  console.log(obj)
  return obj
}

let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1