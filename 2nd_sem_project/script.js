function runCode() {
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;

    let output = document.getElementById("output");

    let code = `
    <html>
    <head>
    <style>${css}</style>
    </head>
    <body>
    ${html}
    <script>${js}<\/script>
    </body>
    </html>
    `;

    output.contentDocument.open();
    output.contentDocument.write(code);
    output.contentDocument.close();
}

function clearCode() {
    document.getElementById("html").value = "";
    document.getElementById("css").value = "";
    document.getElementById("js").value = "";

    let output = document.getElementById("output");
    output.contentDocument.open();
    output.contentDocument.write("");
    output.contentDocument.close();
}

function switchTab(tab, element) {
    document.getElementById("html").classList.add("d-none");
    document.getElementById("css").classList.add("d-none");
    document.getElementById("js").classList.add("d-none");

    document.getElementById(tab).classList.remove("d-none");

    let tabs = document.querySelectorAll(".nav-link");
    tabs.forEach(btn => btn.classList.remove("active"));

    element.classList.add("active");
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

function saveCode() {
    localStorage.setItem("html", document.getElementById("html").value);
    localStorage.setItem("css", document.getElementById("css").value);
    localStorage.setItem("js", document.getElementById("js").value);
    alert("Saved successfully!");
}

function loadCode() {
    document.getElementById("html").value = localStorage.getItem("html") || "";
    document.getElementById("css").value = localStorage.getItem("css") || "";
    document.getElementById("js").value = localStorage.getItem("js") || "";
}

function downloadCode() {
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;

    let content = `
    <html>
    <head>
    <style>${css}</style>
    </head>
    <body>
    ${html}
    <script>${js}<\/script>
    </body>
    </html>
    `;

    let blob = new Blob([content], { type: "text/html" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "project.html";
    a.click();
}