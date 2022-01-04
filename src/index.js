/**
 * const, let変数
 */

// //var変数の定義
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数は上書き可能";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数は再宣言可能";
// console.log(val1);

// //let変数の定義
// let let1 = "let変数";
// console.log(let1);

// //let変数は上書き可能
// let1 = "let変数を上書きしました";
// console.log(let1);

// //let変数は再宣言不可能
// let let1 = "let変数を再宣言しました";
// console.log(let1);

// //const変数の定義
// const const1 = "const変数";
// console.log(const1);

// //constは再宣言・上書き不可

// //constで定義したオブジェクトはプロパティの変更が可能
// //基本的にはオブジェクトの定義にはconstを用いる

// const obj1 = {
//   name: "kohei",
//   age: 25
// };
// console.log(obj1);
// obj1.age = 26;
// console.log(obj1);

// //constは配列の中身も変更可能
// //配列の宣言も基本的にはconstを利用する
// const arr1 = ["dog", "cat"];
// arr1[0] = "bird";
// arr1.push("mouse");
// console.log(arr1);

/**
 * テンプレート文字列
 */

// const name = "kohei";
// const age = 25;

// //従来の方法
// const message = "My name is " + name + ". I'm " + age + " years old.";
// console.log(message);

// //テンプレート文字列を用いた方法
// const message2 = `My name is ${name}. I'm ${age} years old.2`;
// console.log(message2);

/**
 * アロー関数
 */

// //従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
//分割代入はオブジェクトに利用可能
// const myProfile = {
//   name: "kohei",
//   age: 25
// };

// const message1 = `My name is ${myProfile.name}. I'm ${myProfile.age} years old.`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `My name is ${name}. I'm ${age} years old.2`;
// console.log(message2);

// //分割代入は配列にも利用可能
// const myProfile2 = ["kohei", 25];
// const [name2, age2] = myProfile2;
// const message3 = `My name is ${name2}. I'm ${age2} years old.3`;
// console.log(message3);

/**
 * デフォルト値
 */
// const sayHello = (name = "guest") => console.log(`My name is ${name}.`);
// sayHello();
// sayHello("kohey");

/**
 * スプレッド構文
 */
//配列の中身を展開する
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// const numArr = [1, 2];
// sumFunc(...numArr);

// //配列の結合
// const arr1 = [10, 20];
// const arr2 = [30, 40];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// //配列のコピー(値渡し)
// const arr4 = [...arr1];
// arr4[1] = 30;
// console.log(arr4);
// console.log(arr1);

// //配列のコピー(参照渡し)
// const arr5 = arr2;
// arr5[1] = 50;
// console.log(arr5);
// console.log(arr2);

/**
 * map：配列から要素を取り出す(二つ目の引数にはindexを格納することができる)
 */
// const nameArr = ["A", "B", "C"];
// nameArr.map((name, index) =>
//   console.log(`${index + 1}番目の要素は${name}です．`)
// );

// const newNameArr = nameArr.map((name) => {
//   if (name === "C") {
//     return name;
//   } else {
//     return name + "さん";
//   }
// });
// console.log(newNameArr);

/**
 * filter:配列から任意の要素を取り出す
 */
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

/**
 * 三項演算子
 */
// //数字の時は金額表示，　そうでない時はエラー表示
// const num = "1300";
// const formattedNum =
//   typeof num === `number` ? num.toLocaleString() : `数字を入力してください`;
// console.log(formattedNum);

// //２値の合計が100を超えるかどうかを判定する関数
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています．` : "許容範囲内です．";
// };
// console.log(checkSum(100, 20));

/**
 *  || &&の使い方
 */
// ||:左側がfalseなら右側を返却する
const num = null;
const or = num || "未設定です．";
console.log(or);

// &&：左側がtrueなら右側を返却する
const num2 = null;
const and = num2 && "設定済みです．";
console.log(and);
