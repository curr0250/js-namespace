var CURR0250 = {
    init: function () {
        console.log("script in CURR0250 called");
        var div = document.createElement("div");
      

        div.className = "box";
        div.textContent = "CURR0250";

        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", click);
        div.addEventListener("mouseover", hover);
        div.addEventListener("mouseout", hover);

        function hoverMe(ev) {
            this.classList.toggle("highlight");
        }

        function clickMe(ev) {

                this.style.backgroundColor = "#d742f4";
                this.style.borderColor = "#41a0f4";
            }

        }

    }