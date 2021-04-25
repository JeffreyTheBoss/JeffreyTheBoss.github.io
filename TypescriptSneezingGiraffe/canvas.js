window.addEventListener("load", () => {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    const submit = document.getElementById("submit");
    canvas.height = 600;
    canvas.width = 1000;
    let painting = false;
    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function finishPosition() {
        painting = false;
        context.beginPath();
    }
    function draw(e) {
        if (!painting) {
            return;
        }
        context.lineWidth = 4;
        context.lineCap = "round";
        context.lineTo(getMousePos(canvas, e).x, getMousePos(canvas, e).y);
        context.stroke();
        context.moveTo(getMousePos(canvas, e).x, getMousePos(canvas, e).y);
    }
    function save() {
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        alert("thanks for your submission");
        window.location.href = image; // it will save locally
    }
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishPosition);
    canvas.addEventListener("mousemove", draw);
    submit.addEventListener("click", save);
    let incrementCheck = [];
    for (let i = 0; i < 6; i++) {
        incrementCheck[i] = false;
        document.getElementsByClassName("votingbutton")[i].addEventListener("click", () => {
            let counter = 0;
            if (!incrementCheck[i]) {
                counter = parseInt(document.getElementsByClassName("votecounter")[i].innerHTML);
                document.getElementsByClassName("votecounter")[i].innerHTML = String(counter + 1);
                incrementCheck[i] = true;
            }
        });
    }
});
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width, // relationship bitmap vs. element for X
    scaleY = canvas.height / rect.height; // relationship bitmap vs. element for Y
    return {
        x: (evt.clientX - rect.left) * scaleX,
        y: (evt.clientY - rect.top) * scaleY // been adjusted to be relative to element
    };
}
