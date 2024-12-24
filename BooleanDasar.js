/**
 * 1 Jika True
 * 0 Jika False
 */

let DataBoolean1 = (true == 1) //true karena benar, true = 1
console.log (DataBoolean1)

let DataBoolean2 = (false == 0) //true karena benar, false = 0
console.log (DataBoolean2)

DataBoolean2 = (false == 0n) //sama dengan 0, 0n juga false
console.log (DataBoolean2)

DataBoolean2 = (false == "")  //" " merupakan string tanpa karakter, sama bernilai 0
console.log (DataBoolean2)
