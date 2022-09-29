let list = ["kings", "grace", "emma", "ade", "kings"];

// const filter = (arr, ele) => {
// 	for (i = 0; i < arr.length; i++) {
// 		if (arr[i] === ele) {
// 			console.log(arr[i]);
// 			return;
// 		}
// 		console.log("Note found");
// 		return;
// 	}
// };

// const recursiveFilter = (arr, ele) => {
// 	if (arr.includes(ele)) {
// 		console.log("Found");
// 		return;
// 	}
// 	recursiveFilter(arr.length - 1);
// };
// filter(list, "kings");

// const search = (arr, index) => {
// 	let result;
//     console.log(list, '.......')
// 	result = arr.lastIndexOf(index.toLowerCase());
//     if(result){
//         console.log(arr[result], '\n');
//     }
// 	// if (result) {
// 	// 	console.log(result);
// 	// } else {
// 	// 	console.log("Not found");
// 	// }
// };
// search(list, "GRACE");

let users = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Pete" },
	{ id: 3, name: "Mary" },
];
const finddById = (arr, id) => {
	let user = arr.find((item) => item.id === id);
	console.log(user);
};

const filter = (arr, id) => {
	let found = arr.filter((item) => item.id === id);
	console.log(found);
};
let nums = [0, 3, 2, 4, 6, 5, 8, 10, -1, -100, -200];
let alph = ["a", "B"];
const sort = (arr) => {
	let sort_res = arr.sort((a, b) => b.localeCompare(a));
	console.log(sort_res);
};

const arrReduce = (arr) => {
	let reduce = arr.reduce((a, b) => a + b, 0);
	console.log(reduce);
};
// Filtering out duplicate value

let filterDuplicate = list.filter((li, index) => {
	return list.indexOf(li === index)  ;
});

console.log(filterDuplicate);
