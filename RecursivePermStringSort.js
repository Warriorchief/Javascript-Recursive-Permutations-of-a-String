function RecursivePerms(string,answers){
  if (!answers) { answers = {} }
  if (string.length === 0){ return }  /* reach the end leaves of the tree when recur down to nothing */
  answers[string] = true            /*adds item to dictionary and avoids repitition*/

  for(var i = 0;i<string.length;i++){
    var left = string.substring(0,i)
    var right = string.substring(i+1,string.length)
    RecursivePerms(left+right,answers)
  }

  close = Object.keys(answers)  /*this is basically the answer --> all (unique) keys in dictionary*/
  almost = close.sort(); /*sorts alphabetically*/
  final = almost.sort(function(a,b){return a.length - b.length;}) /*callback to sort by length*/
  return final
}

answers = RecursivePerms('abcd')


/*

=> [ 'a',
  'd',
  'c',
  'b',
  'bc',
  'ad',
  'cd',
  'ab',
  'bd',
  'ac',
  'bcd',
  'abc',
  'acd',
  'abd',
  'abcd' ]

*/
