export function isvalidUsername(str:string) {
  // const valid_map = ['admin', 'test']
  // return valid_map.indexOf(str.trim()) >= 0
  return str.trim().length >= 3
}
