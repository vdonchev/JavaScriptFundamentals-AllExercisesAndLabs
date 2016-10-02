let f = ([text]) => text.replace(/(\-?[1-9][0-9]*)\s*?\*\s*?(\-?\d+\.?\d*)/g, (m, n1, n2) => Number(n1) * Number(n2));

console.log(f(['My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).']));