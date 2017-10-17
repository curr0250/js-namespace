var CURR0250 = {
    init: function () {
        console.log("script in CURR0250 called");
        var div = document.createElement("div");
        

        div.className = "box";
        div.textContent = "CURR0250";

        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", click_me);
        div.addEventListener("mouseover", toggleHighlight);
        div.addEventListener("mouseout", toggleHighlight);

        function toggleHighlight(ev) {
            this.classList.toggle("highlight");
        }

        function click_me(ev) {
                this.style.backgroundColor = "pink";
                this.style.borderColor = "blue";
            }

        }

    }
