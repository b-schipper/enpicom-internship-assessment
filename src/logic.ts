
export function validateLuhn(strToTest: string): boolean {
    const length = strToTest.length;
    let digit = 0;
    let sum = 0;
    let odd = false;

    for (let i = (length - 1); i >= 0; i--) 
    {
        digit = parseInt(strToTest[i], 10) | 0;

        if (odd === true) 
        {
            digit = digit * 2 | 0;

            if (digit > 9)
            {
                digit = digit - 9;
            }
        }
        odd = !odd;
        sum += digit;
    }
    if (sum % 10 === 0)
    {
        return true;
    }
    return false;
}