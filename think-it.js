// the code is some missing case
console.log(
    solution(["3x3 xxo oo- oxx", "2x2 xo x-", "4x4 xoxo xoxo x--- xo--", "3x3 xxo ooo oox", "3x3 xxx ooo —-"])
);
// solution(["3x3 xxx ooo oxx", "2x2 xo x-", "4x4 xoxo xoxo x--- xo--", "3x3 xxo ooo oox", "3x3 xxx ooo —-"])
function solution(input) {
    let xCountWin = 0;
    let oCountWin = 0;
    let invalidCount = 0;
    input.forEach(element => {
        const words = element.split(' ');
        let lineLength = words[0].charAt(0)
        let xCount = 0;
        let oCount = 0;

        //first check invalid
        let totolXCount = 0
        let totolOCount = 0
        for (let i = 1; i < words.length; i++) {
            const tempXCount = countOcurrences(words[i], "x");
            const tempOCount = countOcurrences(words[i], "o");
            totolXCount += tempXCount
            totolOCount += tempOCount
        }
        if (Math.abs(totolXCount - totolOCount) > 1) {
            invalidCount++;
        } else {

            //horizontal
            for (let i = 1; i <= lineLength; i++) {
                let xHorTemp = 1;
                let oHorTemp = 1;
                for (let j = 0; j < lineLength - 1; j++) {
                    if (words[i][j] === words[i][j + 1]) {
                        if (words[i][j] === 'x') xHorTemp++
                        if (words[i][j] === 'o') oHorTemp++
                    } else {
                        xHorTemp = 1;
                        oHorTemp = 1;
                    }
                }
                if (xHorTemp >= lineLength) xCount++
                if (oHorTemp >= lineLength) oCount++
                // console.log(words[i] + ' xCountWin ' + xCountWin)
                // console.log(words[i] + ' oCountWin ' + oCountWin)
            }

            // vertical
            for (let i = 0; i <= lineLength - 1; i++) {
                let xVerTemp = 1;
                let oVerTemp = 1;
                for (let j = 1; j <= lineLength - 1; j++) {
                    if (words[j][i] === words[j + 1][i]) {
                        if (words[j][i] === 'x') xVerTemp++
                        if (words[j][i] === 'o') oVerTemp++
                    } else {
                        xVerTemp = 1;
                        oVerTemp = 1;
                    }
                }
                if (xVerTemp >= lineLength) xCount++
                if (oVerTemp >= lineLength) oCount++
            }

            // diagonal
            for (let i = 1; i < lineLength; i++) {
                let xDiagonalTemp = 1;
                let oDiagonalTemp = 1;

                if (words[i][i - 1] === words[i + 1][i]) {
                    if (words[i][i - 1] === 'x') xDiagonalTemp++
                    if (words[i][i - 1] === 'o') oDiagonalTemp++
                } else {
                    xDiagonalTemp = 1;
                    oDiagonalTemp = 1;
                }

                if (xDiagonalTemp >= lineLength - 1) xCount++
                if (oDiagonalTemp >= lineLength - 1) oCount++
            }

            // diagonal reverse
            let j = lineLength - 1;
            for (let i = 1; i < lineLength; i++) {
                let xDiagonalRTemp = 1;
                let oDiagonalRTemp = 1;

                if (words[i][j] === words[i + 1][j - 1]) {
                    if (words[i][j] === 'x') xDiagonalRTemp++
                    if (words[i][j] === 'o') oDiagonalRTemp++
                } else {
                    xDiagonalRTemp = 1;
                    oDiagonalRTemp = 1;
                }

                if (xDiagonalRTemp >= lineLength - 1) xCount++
                if (oDiagonalRTemp >= lineLength - 1) oCount++
                j--
            }

            if (xCount === oCount && xCount !== 0) {
                invalidCount++;
            } else if (xCount > oCount) {
                xCountWin++
            } else if (oCount > xCount) {
                oCountWin++
            }
        }
    });


    return "x: " + xCountWin + " o: " + oCountWin + " invalid: " + invalidCount
}


function countOcurrences(str, value) {
    var regExp = new RegExp(value, "gi");
    return (str.match(regExp) || []).length;
}