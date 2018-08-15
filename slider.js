var slider = new Vue({
    el: 'main',
    data: function() {
        return {
            brick: document.getElementById("brick").value,
            height: document.getElementById("heights").value,
        };
    },
    computed: {
        rows: function() {
            return pyramidDynamic(this.height, this.brick);
        },
    },
    methods: {
        dynamicRows: function() {
            slider.height = document.getElementById("heights").value
            slider.brick = document.getElementById("brick").value
        },
    },
});



function pyramidDynamic(height, brick) {

    var rowStrings = [];
    for (var row = 0; row < height; row++) {

        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick;
        }

        rowStrings.push(rowStr);
    }
    return rowStrings;
}

