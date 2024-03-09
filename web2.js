/*Solution for Palindrome Checker*/
function palindrome(str) {
  let newStr = "";
  for (let s of str) {
    if (
      (s >= "a" && s <= "z") ||
      (s >= "A" && s <= "Z") ||
      (s >= "0" && s <= "99")
    ) {
      newStr += s;
    }
  }
  newStr = newStr.toLowerCase();
  let resultStr = newStr.split("").reverse().join("");
  return resultStr === newStr;
}

palindrome("eye");

/* Solution for Roman Numeral Converter*/

function convertToRoman(num) {
  const hn = Math.floor(num / 1000);
  num = num % 1000;
  const ht = Math.floor(num / 100);
  num = num % 100;
  const hc = Math.floor(num / 10);
  num = num % 10;
  const hdv = num;
  let result = "";
  switch (hn) {
    case 1:
      result += "M";
      break;
    case 2:
      result += "MM";
      break;
    case 3:
      result += "MMM";
      break;
  }
  switch (ht) {
    case 1:
      result += "C";
      break;
    case 2:
      result += "CC";
      break;
    case 3:
      result += "CCC";
      break;
    case 4:
      result += "CD";
      break;
    case 5:
      result += "D";
      break;
    case 6:
      result += "DC";
      break;
    case 7:
      result += "DCC";
      break;
    case 8:
      result += "DCCC";
      break;
    case 9:
      result += "CM";
      break;
  }
  switch (hc) {
    case 1:
      result += "X";
      break;
    case 2:
      result += "XX";
      break;
    case 3:
      result += "XXX";
      break;
    case 4:
      result += "XL";
      break;
    case 5:
      result += "L";
      break;
    case 6:
      result += "LX";
      break;
    case 7:
      result += "LXX";
      break;
    case 8:
      result += "LXXX";
      break;
    case 9:
      result += "XC";
      break;
  }

  switch (hdv) {
    case 1:
      result += "I";
      break;
    case 2:
      result += "II";
      break;
    case 3:
      result += "III";
      break;
    case 4:
      result += "IV";
      break;
    case 5:
      result += "V";
      break;
    case 6:
      result += "VI";
      break;
    case 7:
      result += "VII";
      break;
    case 8:
      result += "VIII";
      break;
    case 9:
      result += "IX";
      break;
  }
  return result;
}

convertToRoman(36);

// Solution for Caesars Cipher
function rot13(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      let s = str.charCodeAt(i);
      console.log(`before: ${s} -- ${str[i]}`);
      if (s < 65 + 13) {
        s = 90 - (13 - (s - 65 + 1));
      } else {
        s = s - 13;
      }
      let newChar = String.fromCharCode(s);
      str = str.substring(0, i) + newChar + str.substring(i + 1);
    }
  }
  return str;
}

rot13("SERR PBQR PNZC");

//Solution for Telephone Number Validator
function telephoneCheck(str) {
  let regexValidate = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  return regexValidate.test(str);
}

console.log(telephoneCheck("555-555-5555"));

// Solution for Cash Register
const currencyUnits = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];
function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let change = [];
  let totalCashInDrawer = 0;

  for (let i = 0; i < cid.length; i++) {
    totalCashInDrawer += cid[i][1];
  }

  if (changeDue > totalCashInDrawer) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (changeDue === totalCashInDrawer) {
    return { status: "CLOSED", change: cid };
  }

  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    let unit = currencyUnits[i][0];
    let value = currencyUnits[i][1];
    let availableAmount = cid[i][1];
    let maxUnits = Math.floor(availableAmount / value);
    let returnedUnits = Math.min(maxUnits, Math.floor(changeDue / value));

    if (returnedUnits > 0) {
      change.push([unit, returnedUnits * value]);
      changeDue = Math.round((changeDue - returnedUnits * value) * 100) / 100;
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: change };
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
