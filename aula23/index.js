// SHORT-CIRCUIT
console.log("a" && 0 && undefined && 'João' && false); // Retorna o primeiro valor falso

console.log(0 && undefined || 'João' || false || "a"); // Retorna o primeiro valor verdadeiro
