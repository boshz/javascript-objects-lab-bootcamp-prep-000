var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  googoo = {[key]: value}
  return object.googoo
}