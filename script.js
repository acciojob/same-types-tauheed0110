function isSameType(value1, value2) {
  const canBeNumberA = !isNaN(Number(a));
    const canBeNumberB = !isNaN(Number(b));
    
    return canBeNumberA === canBeNumberB;
	
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
