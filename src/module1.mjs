// make sure that run module1.mjs after reaching correct path 
import ui,{a,b,d} from './module2.mjs'
//import ui,{a1,b2,d1} from './module2.mjs' this is wrong
// we can not change naming of variables here
// names of variables must be same as inside module 2 file

console.log(ui)
console.log(b)
console.log(d)