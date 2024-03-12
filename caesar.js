function caesarCipher(string) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const alph = alphabet[0].charCodeAt(0);

  function cipher(char) {
    const charCode = char.charCodeAt(0);
    const newOrderAlphabet = ((charCode - 65 + 15) % alphabet.length) + alph;
    return String.fromCharCode(newOrderAlphabet);
  }

  return string.split('').map((char) => cipher(char)).join('');
}

export default caesarCipher;

