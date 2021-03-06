/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * local vars must not be visible outside with block
 * local functions must not be visible outside with block
 * local function expresssions should not be visible outside with block
 * local vars must shadow outer vars
 * local functions must shadow outer functions
 * local function expresssions must shadow outer function expressions
 * eval should use the appended object to the scope chain
 *
 * @path ch12/12.14/12.14-6.js
 * @description catch introduces scope - block-local function expression must shadow outer function expression
 */


function testcase() {
  var o = {foo : function () { return 42;}};

  try {
    throw o;
  }
  catch (e) {
    var foo = function () {};
    if (foo() === undefined) {
      return true;
    }
  }
 }
runTestCase(testcase);
