// This time no story, no theory. The examples below show you how to write function accum:
//
//     Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum(s) {
    let res = '';
    for ( i = 0; i < s.length; i++) {

        res += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + '-'
    }
    return res.slice(0, -1)
}