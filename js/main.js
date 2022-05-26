const CopyPasswordToClipboard = (textElmentInput) => {
    try {
        if (textElmentInput.value.length > 0) {
            textElmentInput.select();
            textElmentInput.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(textElmentInput.value);
            document.querySelector('.msgCopy').classList.replace('msgCopy-hide', 'msgCopy-visible')
            setTimeout(() => {
                document.querySelector('.msgCopy').classList.replace('msgCopy-visible', 'msgCopy-hide')
            }, 3000)

        }
    } catch {
        console.log('error on copy password to clipboard...')
    }

}

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
}
const generatePassword = (lengthPassword) => {
    const lowCase = "abcdefghijklmnopqrstuvxyz";
    const upCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    const Numbers = "0123456789";
    const SpecialChar = "£$&()*+[]@#^-_!?{}~|<>";
    let char = ""
    let password = ""
    for (var i = 0; i < lengthPassword; i++) {
        let n = getRandomNumber(4)

        switch (n) {
            case 0: {
                char = lowCase[getRandomNumber(lowCase.length)]
                password += char
            }
            break;
        case 1: {
            char = SpecialChar[getRandomNumber(SpecialChar.length)]
            password += char

        }
        break;
        case 2: {
            char = Numbers[getRandomNumber(Numbers.length)]
            password += char
        }
        break;
        case 3: {
            char = upCase[getRandomNumber(char.length)]
            password += char
        }
        break;
        }
    }
    return password;

}


const lengthPasswordEventGenerator = () => {
    document.querySelector('#input-range').addEventListener('change', (e) => {
        document.querySelector('.length-value').innerHTML = e.target.value
        document.querySelector('.result input').value = generatePassword(parseInt(e.target.value))
    })
}

window.addEventListener('load', () => {
    lengthPasswordEventGenerator()
    document.querySelector('.reset').addEventListener('click', () => {
        document.querySelector('.result input').value = generatePassword(parseInt(document.querySelector('#input-range').value))
    })
    document.querySelector('.copy').addEventListener('click', () => {
        CopyPasswordToClipboard(document.querySelector('.result input'))
    })
})
