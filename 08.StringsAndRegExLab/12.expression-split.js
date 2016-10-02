let f = ([exp]) => exp.split(/[\s\(\),;\.]+/).filter(w => w != '').join('\n');

console.log(f(['let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}']));