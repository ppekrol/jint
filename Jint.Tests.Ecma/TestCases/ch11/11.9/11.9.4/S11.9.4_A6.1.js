// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If Type(x) and Type(y) are Undefined-s, return true
 *
 * @path ch11/11.9/11.9.4/S11.9.4_A6.1.js
 * @description void 0, eval("var x") is undefined
 */

//CHECK#1
if (!(undefined === undefined)) {
  $ERROR('#1: undefined === undefined');
}

//CHECK#2
if (!(void 0 === undefined)) {
  $ERROR('#2: void 0 === undefined');
}

//CHECK#3
if (!(undefined === eval("var x"))) {
  $ERROR('#3: undefined === eval("var x")');
}

