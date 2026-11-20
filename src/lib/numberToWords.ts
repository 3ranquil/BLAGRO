
/**
 * @function numberToNairaWords
 * @description function to convert numbers to word
 */
export function numberToNairaWords(num: number): string {
  if (isNaN(num) || num === 0) return 'Zero Naira Only';

  const units = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
    'Seventeen', 'Eighteen', 'Nineteen'
  ];

  const tens = [
    '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
  ];

  const scales = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

  function convertGroup(n: number): string {
    let result = '';
    const hundred = Math.floor(n / 100);
    const rest = n % 100;

    if (hundred > 0) {
      result += units[hundred] + ' Hundred';
      if (rest > 0) result += ' and ';
    }

    if (rest > 0) {
      if (rest < 20) {
        result += units[rest];
      } else {
        const ten = Math.floor(rest / 10);
        const unit = rest % 10;
        result += tens[ten];
        if (unit > 0) result += ' ' + units[unit];
      }
    }

    return result.trim();
  }

  const parts = Math.floor(Math.abs(num));
  const kobo = Math.round((Math.abs(num) - parts) * 100);

  let temp = parts;
  let groupIndex = 0;
  let wordResult = '';

  while (temp > 0) {
    const chunk = temp % 1000;
    if (chunk !== 0) {
      const chunkWords = convertGroup(chunk);
      const scale = scales[groupIndex];
      const chunkStr = scale ? `${chunkWords} ${scale}` : chunkWords;
      wordResult = wordResult ? `${chunkStr}, ${wordResult}` : chunkStr;
    }
    temp = Math.floor(temp / 1000);
    groupIndex++;
  }

  if (!wordResult) wordResult = 'Zero';

  let finalWords = `${wordResult} Naira`;
  if (kobo > 0) {
    const koboWords = convertGroup(kobo);
    finalWords += `, ${koboWords} Kobo`;
  }
  finalWords += ' Only';

  return finalWords;
}
