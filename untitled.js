function quickSort(arr) {
	let q  = arr[0],leftArr = [],rightArr = [];
	for(let i = 0; i<arr.length;i++) {
		if(arr[i] < q) {
			leftArr.push(arr[i])
		} else {
			rightArr.push(arr[i])
		}
	}
	return [].concat(quickSort(leftArr),q,quickSort(rightArr))
}