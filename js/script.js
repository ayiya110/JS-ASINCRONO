// XMLHttpRequest
$("#btnXHR").click(function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dummyjson.com/recipes/?delay=3000");
    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);

            data.recipes.forEach(function (item) {
                $("#resultXHR").append("<li>" + item.name + "</li>");
            });
        }
    };
    xhr.onerror = function () {
        console.error("Error XHR");
    };
    xhr.send();
});

// Uso de fetch()
$("#btnFetch").click(function () {
    fetch("https://dummyjson.com/recipes/?delay=3000")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(function (data) {
            data.recipes.forEach(function (item) {
                $("#resultFetch").append("<li>" + item.name + "</li>");
            });
        })
        .catch(function (error) {
            console.error("Error Fetch:", error);
        });
});

// Crear alerta
document.getElementById("btnAlert").addEventListener("click", function () {
    alert("¡Hola, mundo!");
});

// Promesas
var miPromesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var exito = true;
        exito ? resolve("¡Promesa cumplida!") : reject("Error en promesa");
    }, 2000);
});

miPromesa
    .then(function (result) {
        document.getElementById("resultPromise").textContent = result;
    })
    .catch(function (error) {
        console.error(error);
    });

// jQuery
$("#btnJQuery").click(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/2",
        method: "GET",
        success: function (data) {
            $("#resultJQuery").text(data.title);
        },
        error: function (error) {
            console.error("Error jQuery:", error);
        },
    });
});

// Axios
document.getElementById("btnAxios").addEventListener("click", function () {
    axios
        .get("https://jsonplaceholder.typicode.com/posts/3")
        .then(function (response) {
            document.getElementById("resultAxios").textContent = response.data.title;
        })
        .catch(function (error) {
            console.error("Error Axios:", error);
        });
});

// Funciones en ES5
function cargarXHR() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/4");
    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById("resultadoFinal").textContent = data.title;
        }
    };
    xhr.send();
}

function cargarJQuery() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/5",
        success: function (data) {
            $("#resultadoFinal").text(data.title);
        },
    });
}

function cargarAxios() {
    axios.get("https://jsonplaceholder.typicode.com/posts/6").then(function (response) {
        document.getElementById("resultadoFinal").textContent = response.data.title;
    });
}
