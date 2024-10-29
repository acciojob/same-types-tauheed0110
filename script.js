function isSameType(value1, value2) {
  const typeA = typeof eval(a);
    const typeB = typeof eval(b);
    
    return typeA === typeB;
	
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
