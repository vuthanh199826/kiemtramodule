function Check(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "a" || arr[i] === "o" || arr[i] === "e" || arr[i] === "u" || arr[i] === "i") {
            count++;
        }
    }
    if (count > 0) {
        return count;
    } else {
        return false;
    }

}

function Program() {
    let string = prompt("nhập chuỗi vào đây");
    let array = string.split().join();
    let test = Check(array);
    if (!test) {
        alert("chuỗi vừa nhập không có ký tự nguyên âm nào");
    } else {
        alert("chuỗi vừa nhập có " + test + " ký tự nguyên âm");
    }
}

Program();