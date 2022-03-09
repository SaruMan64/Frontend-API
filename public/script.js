$(document).ready(function () {
    $("#btn-request").click(() => {
        requestNumber("http://localhost:4000/randomnumber")
            .then((req) => {
                console.log(req);
                document.getElementById("demo").innerHTML = req;
            })
            .catch((err) => {
                console.log(err);
                document.getElementById("demo").innerHTML = err;
            });
    })
})

const requestNumber = (url) => {
    const request = (resolve, reject) => {
        const ajaxRequest = $.ajax(url, {
            timeout: 3000,
            success: function (data, status, xhr) {
                resolve(data)
            },
            error: function (jqXhr, textStatus, errorMsg) {
                reject(errorMsg)
            }
        }
        )
    }
    return new Promise(request);
}


/* const requestNumber = (url) => {
    const request = (resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            const This = this;
            const time = setInterval(() => {
                if (This.readyState == 4 && This.status == 200) {
                    resolve(This.responseText);
                    clearInterval(time)
                }
                else {
                    reject("Timeout.");
                    xhttp.abort();
                }
            }, 3000)
        }
        xhttp.open("GET", url);
        xhttp.send();
    };
    return new Promise(request);
};

const btnRequest = document.getElementById("btn-request");



btnRequest.onclick = () => {
    requestNumber("http://localhost:4000/randomnumber")
        .then((req) => {
            console.log(req);
            document.getElementById("demo").innerHTML = req;
        })
        .catch((err) => {
            console.log(err);
            document.getElementById("demo").innerHTML = err;
        });

}
 */