import { FunctionalComponent } from "preact";
import './Styles/FormatText.css';
import { useRef, useState } from "preact/hooks";

enum FontStyles {
    TIMES_NEW_ROMAN = 'Times New Roman',
    WINGDINGS = 'Wingdings',
    MONOSPACE = 'Monospace'
}

interface FormattedChar {
    char: string,
    bold: boolean,
    italic: boolean,
    fontSize: number,
    fontFamily: FontStyles
}

const FormatText: FunctionalComponent = () => {
    const [letters, setLetters] = useState<FormattedChar[]>([]);

    const output = useRef<HTMLDivElement>(null);

    const formatText = (text: string) => {
        const allowedFontSizes = [0, 1, 4, 9, 12, 16, 25, 28, 32, 36, 42, 49, 64, 81];
        const charCount: { [char: string]: number } = {};
        let index = 0;

        setLetters([]);

        [...text].forEach(char => {
            if (/[a-z]/i.test(char))
                charCount[char.toUpperCase()] = (charCount[char.toUpperCase()] ?? 0) + 1;

            if (!/[MDCLXVI]/.test(char))
                index++;

            setLetters(oldLetters => [...oldLetters, {
                char: char,
                bold: /[aeiouy]/i.test(char),
                italic: true,
                fontSize: /[a-z]/i.test(char) ? allowedFontSizes[charCount[char.toUpperCase()] + 6 - (charCount[char.toUpperCase()] + 6 >= allowedFontSizes.length ? allowedFontSizes.length : 0)] : /\d/.test(char) ? parseInt(char) ** 2 : 28,
                fontFamily: /[MDCLXVI]/.test(char) ? FontStyles.TIMES_NEW_ROMAN : index <= Math.ceil(text.length / 3) ? FontStyles.WINGDINGS : FontStyles.MONOSPACE
            }])
        });
    }

    const copyOutput = () => {
        navigator.clipboard.write([new ClipboardItem({
            'text/html': new Blob([[...output.current.children].map(element => element.outerHTML).join('')], { type: 'text/html' })
          })]);
    }

    return (
        <div className='format-text'>
            <div
                onBlur={(e) => formatText((e.target as HTMLDivElement).textContent)}
                className='input'
                contenteditable='plaintext-only'
                translate={false}
                spellcheck={false}
                />

            <div className='output'>
                <button onClick={copyOutput}>Copy Formatted Text</button>

                <div ref={output} translate={false} spellcheck={false}>
                    {letters.map(formatChar => (
                        <span style={`
                            ${formatChar.bold ? 'font-weight: bold;' : ''}
                            ${formatChar.italic ? 'font-style: italic;' : ''}
                            font-size: ${formatChar.fontSize}px;
                            font-family: ${formatChar.fontFamily};
                            `}>
                            {formatChar.char}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FormatText;