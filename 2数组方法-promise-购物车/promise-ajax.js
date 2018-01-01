// function ajax({type = 'get', url = ""}) {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.open(type, url, true);
//         xhr.onload = function () {//响应成功时 xhr.readystate == 4
//             if (/^2\d{2}$/.test(xhr.status)) {
//                 let data = JSON.parse(xhr.responseText);
//                 resolve(data);
//             } else {
//                 reject("失败了");
//             }
//         }
//         xhr.onerror = function () {
//             reject("失败了");
//         }
//         xhr.send(null);
//
//     })
// }

function ajax({type = 'get', url = ""}) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(type, url, true);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {  // 成功完成
                if (xhr.status === 200) { // 判断响应结果
                    try {
                        let response = JSON.parse(xhr.responseText);
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error(xhr.statusText));
                }
            }
        }
    })
}