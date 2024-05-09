import { FunctionalComponent } from "preact";
import VideoPanel, { VideoObject } from "../Components/VideoPanel";
import { useState } from "preact/hooks";
import data from '../assets/videos.json';
import './Styles/VideoSearch.css';

enum VideoFilter {
    ANY,
    MONTHS,
    SPONSORS,
    ROMAN_NUMERALS,
    CAPTCHA,
    COUNTRIES,
    CHESS,
    AFFIRMATIONS
}

enum CountryFilter {
    ANY,
    IRAN,
    JAPAN,
    PERU,
    KENYA,
    SPAIN,
    INDIA
}

enum SponsorFilter {
    ANY,
    PEPSI,
    SHELL,
    STARBUCKS
}

const VideoSearch: FunctionalComponent = () => {
    const [videos, setVideos] = useState<VideoObject[] | null>(null);
    const [minutes, setMinutes] = useState<number>(3);
    const [seconds, setSeconds] = useState<number>(0);
    const [filter, setFilter] = useState<VideoFilter>(VideoFilter.ANY);
    const [countryFilter, setCountryFilter] = useState<CountryFilter>(CountryFilter.ANY);
    const [sponsorFilter, setSponsorFilter] = useState<SponsorFilter>(SponsorFilter.ANY);

    const getTotalSeconds = () => minutes * 60 + seconds;

    const getVideoData = (data: any): VideoObject[] => {
        let videoData: VideoObject[] = [];

        for (let key in data) {
            videoData.push(
                ...(Array.isArray(data[key])
                ? data[key].map(video => {
                    return {
                        seconds: video.seconds,
                        id: video.id,
                        atomicNumber: video.atomic_number,
                        romanNumeralFormat: video.xxxv
                    } as VideoObject
                })
                : getVideoData(data[key]))
            )
        }

        return videoData;
    }

    const filterVideos = (): VideoObject[] => {
        switch (filter) {
            case VideoFilter.ANY:
                return getVideoData(data);
            case VideoFilter.MONTHS:
                return getVideoData(data.months);
            case VideoFilter.SPONSORS:
                switch (sponsorFilter) {
                    case SponsorFilter.ANY:
                        return getVideoData(data.sponsors);
                    case SponsorFilter.PEPSI:
                        return getVideoData(data.sponsors.pepsi);
                    case SponsorFilter.SHELL:
                        return getVideoData(data.sponsors.shell);
                    case SponsorFilter.STARBUCKS:
                        return getVideoData(data.sponsors.starbucks);
                }
            case VideoFilter.ROMAN_NUMERALS:
                return getVideoData(data.roman_numerals);
            case VideoFilter.CAPTCHA:
                return getVideoData(data.captcha);
            case VideoFilter.COUNTRIES:
                switch (countryFilter) {
                    case CountryFilter.ANY:
                        return getVideoData(data.countries);
                    case CountryFilter.IRAN:
                        return getVideoData(data.countries.iran);
                    case CountryFilter.JAPAN:
                        return getVideoData(data.countries.japan);
                    case CountryFilter.PERU:
                        return getVideoData(data.countries.peru);
                    case CountryFilter.KENYA:
                        return getVideoData(data.countries.kenya);
                    case CountryFilter.SPAIN:
                        return getVideoData(data.countries.spain);
                    case CountryFilter.INDIA:
                        return getVideoData(data.countries.india);
                }
            case VideoFilter.CHESS:
                return getVideoData(data.chess);
            case VideoFilter.AFFIRMATIONS:
                return getVideoData(data.affirmations);
        }
    }

    const searchVideo = () => {
        const totalSeconds = getTotalSeconds();
        setVideos(
            filterVideos()
            .filter(
                video => Math.abs(video.seconds - totalSeconds) <= 1
            )
        );
    }

    return (
        <div className='video-search'>
            <b>Video Length</b>
            <label>
                <input
                    type='number'
                    min='3'
                    max='59'
                    defaultValue='3'
                    onChange={(e) => setMinutes((e.target as HTMLInputElement).valueAsNumber)}
                />
                minutes{' '}
                <input
                    type='number'
                    min='0'
                    max='59'
                    defaultValue='0'
                    onChange={(e) => setSeconds((e.target as HTMLInputElement).valueAsNumber)}
                />
                seconds
            </label>

            <div className='video-filters'>
                <b>
                    Filters
                </b>
                <div>
                    <select onChange={(e) => setFilter(parseInt((e.target as HTMLSelectElement).value))}>
                        <option value={VideoFilter.ANY}>Any</option>
                        <option value={VideoFilter.MONTHS}>Months</option>
                        <option value={VideoFilter.SPONSORS}>Sponsors</option>
                        <option value={VideoFilter.ROMAN_NUMERALS}>Roman Numerals</option>
                        <option value={VideoFilter.CAPTCHA}>Captcha</option>
                        <option value={VideoFilter.COUNTRIES}>Countries</option>
                        <option value={VideoFilter.CHESS}>Chess</option>
                        <option value={VideoFilter.AFFIRMATIONS}>Affirmations</option>
                    </select>

                    {filter === VideoFilter.COUNTRIES &&
                    <select onChange={(e) => setCountryFilter(parseInt((e.target as HTMLSelectElement).value))}>
                        <option value={CountryFilter.ANY}>Any</option>
                        <option value={CountryFilter.IRAN}>Iran</option>
                        <option value={CountryFilter.JAPAN}>Japan</option>
                        <option value={CountryFilter.PERU}>Peru</option>
                        <option value={CountryFilter.KENYA}>Kenya</option>
                        <option value={CountryFilter.SPAIN}>Spain</option>
                        <option value={CountryFilter.INDIA}>India</option>
                    </select>}

                    {filter === VideoFilter.SPONSORS &&
                    <select onChange={(e) => setSponsorFilter(parseInt((e.target as HTMLSelectElement).value))}>
                        <option value={SponsorFilter.ANY}>Any</option>
                        <option value={SponsorFilter.PEPSI}>Pepsi</option>
                        <option value={SponsorFilter.SHELL}>Shell</option>
                        <option value={SponsorFilter.STARBUCKS}>Starbucks</option>
                    </select>}
                </div>
            </div>

            <button onClick={searchVideo}>
                Search
            </button>
            
            <ul className='videos-found'>
                {videos && videos.map(video => (
                    <li>
                        <VideoPanel video={video}/>
                    </li>)
                )}
            </ul>
        </div>
    )
}

export default VideoSearch;