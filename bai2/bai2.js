function Check(a, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (a === arr[i]) {
            return arr.indexOf(a);
        }
    }
    return false;

}

function Program() {
    // yêu cầu mảng được cho trước
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let num = +prompt("nhập số cần tìm vào đây");
    let test = Check(num, arr);
    if (!test) {
        alert("Số này không nằm trong mảng cho sẵn, " + " mảng cho sẵn là: " + arr);
    } else {
        alert("số vừa nhập được tìm thấy ở vị trí thứ " + test);
    }
}

Program();