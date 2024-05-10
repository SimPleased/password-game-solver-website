import { FunctionalComponent } from "preact";
import './Styles/VideoPanel.css';
import { useEffect, useState } from "preact/hooks";

export interface VideoObject {
    seconds: number,
    id: string,
    atomicNumber: number,
    romanNumeralFormat: boolean
}

interface VideoPanelProps {
    video: VideoObject
}

const VideoPanel: FunctionalComponent<VideoPanelProps> = ({ video }) => {
    const [repeatedLetters, setRepeatedLetters] = useState<{ letter: string, count: number }[]>([]);

    const getRepeatedLetters = (): { letter: string, count: number }[] => {
        const charCount: { [char: string]: number } = {};
        
        [...video.id].forEach(char => {
            if (/\w/i.test(char))
                charCount[char.toLocaleUpperCase()] = (charCount[char.toLocaleUpperCase()] ?? 0) + 1;
        });

        return Object.entries(charCount)
            .map(([char, count]) => {
                if (count > 1){
                    return {
                        letter: char,
                        count
                    }
                }
            })
            .filter((repeatedLetter): repeatedLetter is { letter: string, count: number } => repeatedLetter !== undefined);
    }

    useEffect(() => setRepeatedLetters(getRepeatedLetters), []);

    return (
        <div className='video-panel'>
            <button onClick={() => navigator.clipboard.writeText('youtu.be/' + video.id)}>
                Copy Video
            </button>

            <span>
                <b>Video Length</b>
                <br/>
                {Math.floor(video.seconds / 60)}m {video.seconds % 60}s
            </span>

            <span>
                <b>Video ID</b>
                <br/>
                {video.id}
            </span>

            <span>
                <b>Atomic Value</b>
                <br/>
                {video.atomicNumber}
                <br/>
                This video uses the roman numerals {video.romanNumeralFormat ? 'XXXV' : 'VII V'}
            </span>

            {repeatedLetters.length !== 0 &&
            <span>
                <b>Repeated Letters</b>
                <ul className='repeated-letters'>
                    {repeatedLetters.map(({letter, count}) => (
                        <li>
                            <b>{letter}</b> (x{count})
                        </li>
                    ))}
                </ul>
            </span>}
        </div>
    )
}

export default VideoPanel;