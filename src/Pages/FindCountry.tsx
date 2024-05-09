import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import './Styles/FindCountry.css';

const FindCountry: FunctionalComponent = () => {
    const countries = [{
        name: "Australia",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332510022!6m8!1m7!1sCAoSLEFGMVFpcE4zNEtxOUROWGF1MmZzRVgycFhETFpmQ0lDbldhUVBrdS03RlF1!2m2!1d-25.35068396746521!2d131.0463222711639!3f264.26!4f4.340000000000003!5f0.7820865974627469"
    }, {
        name: "Belarus",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332520258!6m8!1m7!1ss88rdBq5UiYKvp6ojwA7_Q!2m2!1d53.90547982613528!2d27.56014437433606!3f49.35!4f6.510000000000005!5f0.4000000000000002"
    }, {
        name: "Belgium",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332523961!6m8!1m7!1srkFY-BkTJ0-2z2hWjwMHLg!2m2!1d51.21807961391364!2d4.41501826373772!3f286.45!4f10.659999999999997!5f0.7820865974627469"
    }, {
        name: "Bulgaria",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332538942!6m8!1m7!1sncjaflFhux3cCQ9oVdgzTg!2m2!1d42.14945905626361!2d24.74771841789687!3f296.84!4f7.189999999999998!5f0.4000000000000002"
    }, {
        name: "Cambodia",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332542719!6m8!1m7!1sCAoSLEFGMVFpcE16VF9DSnAyVEl1azRPMmtlOWdoVWlvS2ZtN2NjR0J1U0prN3Vi!2m2!1d11.5566079!2d104.9353968!3f258.58!4f11.780000000000001!5f0.4000000000000002"
    }, {
        name: "Canada",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332551821!6m8!1m7!1sCAoSLEFGMVFpcE52V1FPc3FXbFhQQmZRamIzblp5dzdCTFdleVdVZ0tyU0E4REls!2m2!1d60.18724916!2d-134.6889013!3f125.82!4f-10.329999999999998!5f0.7820865974627469"
    }, {
        name: "Chile",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332554989!6m8!1m7!1sqIYR4B95XigAAAQpm86PUg!2m2!1d-42.33183318859179!2d-73.37515973422785!3f350.28!4f20.42!5f0.7820865974627469"
    }, {
        name: "Colombia",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332561586!6m8!1m7!1sZbG88ECu5M1YVxcm7pp78A!2m2!1d4.598539130476504!2d-74.06810659286658!3f280.78!4f-2.8799999999999955!5f0.7820865974627469"
    }, {
        name: "Croatia",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332568377!6m8!1m7!1sCAoSLEFGMVFpcE9nMWdmY3YzbVp1bzNjMUVMMzh6RmlCT29zdkg3YS1MdWsydG5p!2m2!1d45.08192591163372!2d13.63476375882529!3f95.03!4f0.519999999999996!5f0.4000000000000002"
    }, {
        name: "Denmark",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332575021!6m8!1m7!1sJo2m04ymc8xFmGFYNH2Tyw!2m2!1d56.65255161375055!2d8.52625930536295!3f69.18!4f3.3299999999999983!5f0.7820865974627469"
    }, {
        name: "Finland",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332601363!6m8!1m7!1sCAoSK0FGMVFpcE5qdjZmMXNteWJBNGRQMHVSb0l5d19HSWJuUmVWa0FMTlZHM0k.!2m2!1d60.1378835301528!2d24.99053198844194!3f265.93!4f3.25!5f0.7820865974627469"
    }, {
        name: "Georgia",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332608703!6m8!1m7!1sCAoSLEFGMVFpcFA3enhDdmxnQzRPU215b2dWT3RUSWNweXdmeE1iMVNFSl91NUFJ!2m2!1d41.673687!2d44.7001648!3f273.65!4f4.230000000000004!5f0.4000000000000002"
    }, {
        name: "Germany",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332611797!6m8!1m7!1sCAoSK0FGMVFpcE1QS2F3QURzcVIxcW5vVXV0Y2Nqc0ZxVjU0NThGbzZwTlpRbDA.!2m2!1d47.737947!2d7.689231200000001!3f226.36!4f19.5!5f0.7820865974627469"
    }, {
        name: "Hungary",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332628469!6m8!1m7!1sCAoSLEFGMVFpcFB2LXBDakxiWnJXVjFodTBvUDY5c1RxdmdWOXBUWnFqdFY0OHRq!2m2!1d47.19177768270664!2d18.4107785381816!3f230.2!4f-10.89!5f0.4000000000000002"
    }, {
        name: "Indonesia",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332634720!6m8!1m7!1svvtoiual62rn1U6c2NvRnQ!2m2!1d-3.843394332539138!2d122.0486517430776!3f290.41!4f-9.670000000000002!5f0.4000000000000002"
    }, {
        name: "Israel",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332638968!6m8!1m7!1sCAoSLEFGMVFpcE1YV01zRWdla2h1MjhjdFJob1B0eHRWXzNkWGJSakotQURmLXIx!2m2!1d32.056203!2d34.750012!3f138.82!4f-6.829999999999998!5f0.7820865974627469"
    }, {
        name: "Kenya",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332651820!6m8!1m7!1s5U9Rh5BRuFrCA5dOBChIJQ!2m2!1d-3.994126918268447!2d39.69593443016079!3f165.56!4f-0.14000000000000057!5f0.7820865974627469"
    }, {
        name: "Liberia",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332662148!6m8!1m7!1sCAoSLEFGMVFpcE9QcERqeGlWc0lscXhZb1FfQ3J0b3RLSmtoZmJaT2ZieUpTdFI5!2m2!1d6.317254223164158!2d-10.80666989120235!3f50.26!4f6.109999999999999!5f0.4000000000000002"
    }, {
        name: "Madagascar",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332669517!6m8!1m7!1sYohII4q3A6QYAaDyJI_-KQ!2m2!1d-18.92344366752726!2d47.53194652035273!3f72.19!4f10.769999999999996!5f0.7820865974627469"
    }, {
        name: "New Zealand",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332696468!6m8!1m7!1sZafOzmzIQnx7u7CnD0dMkg!2m2!1d-37.87177853802388!2d175.682883726137!3f142!4f-2.180000000000007!5f0.7820865974627469"
    }, {
        name: "Norway",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332700135!6m8!1m7!1sflanBzb_7quSGyG9vP9DmA!2m2!1d58.72147503485372!2d9.235934985588043!3f184.68!4f-8.159999999999997!5f0.7820865974627469"
    }, {
        name: "Philippines",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332710402!6m8!1m7!1shDbmXwkTQv1NYH36K6Vr2A!2m2!1d14.62960745037837!2d121.0964071307574!3f152.33!4f4.900000000000006!5f0.4000000000000002"
    }, {
        name: "Portugal",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332713772!6m8!1m7!1sSZ1ENOyWibCarEvBdMM_lg!2m2!1d38.70976500817227!2d-9.133537484566608!3f46.68!4f13.280000000000001!5f0.4000000000000002"
    }, {
        name: "Romania",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332719970!6m8!1m7!1sV8CqZprZitaQJynaUAjEAw!2m2!1d44.42689291919224!2d26.10296593559447!3f242.94!4f-10.61!5f0.4000000000000002"
    }, {
        name: "Russia",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332723639!6m8!1m7!1sCAoSLEFGMVFpcFBGMG5rYjFCcGhYNm5ObENGQmJHUEdHUXBWMmUwYjBSMXFBUEFT!2m2!1d55.73173347549965!2d37.50606995075941!3f268.32!4f19.040000000000006!5f0.4000000000000002"
    }, {
        name: "Slovenia",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332731147!6m8!1m7!1ssNFPSsrlsNTIDAcHLasCIw!2m2!1d46.56029155259352!2d15.64945569779819!3f120.87!4f18.58!5f0.4000000000000002"
    }, {
        name: "Venezuela",
        embed: "https://www.google.com/maps/embed?pb=!4v1686332761420!6m8!1m7!1sCAoSLEFGMVFpcE1icVBQZkxDX1MwdE44RWZ6allUN0UxTVp4X19tSGdMXzRnNFhN!2m2!1d10.5132439351186!2d-66.9125697389245!3f172.89!4f6.269999999999996!5f0.4000000000000002"
    }, {
        name: "Albania",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119136328!6m8!1m7!1sCAoSLEFGMVFpcE5pblZqV09hZDNSeGI3WE5CdFYtUnVvc2dud1lhSTI0YlZRZ24x!2m2!1d41.784855531691!2d19.646614490124!3f349.04!4f-6.579999999999998!5f0.7820865974627469"
    }, {
        name: "Belgium",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119150490!6m8!1m7!1sjT026m8Nhnp7aQIXqudXeQ!2m2!1d51.20898806548806!2d2.884661580230813!3f77.68!4f-3.8499999999999943!5f0.7820865974627469"
    }, {
        name: "Botswana",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119154762!6m8!1m7!1sCAoSLEFGMVFpcE1EdWM1ZjFkc0NBekw5Q3E0RVNUV1dqSkNSbWl6dFF5ZEo0X2Nx!2m2!1d-20.5000325!2d25.1290002!3f252.33!4f-4.959999999999994!5f0.7820865974627469"
    }, {
        name: "Colombia",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119182731!6m8!1m7!1s0owHJBDb2iocP6zfIwfe4w!2m2!1d3.859797749837747!2d-76.5402388588541!3f268.63!4f3.3100000000000023!5f0.41007199324273763"
    }, {
        name: "Croatia",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119196042!6m8!1m7!1sCAoSLEFGMVFpcE54dTVLYzZ4eGR1bnIxeFcwU3EtbUtDRGI5Mjd0by1zd0RTYjRx!2m2!1d45.08186619968883!2d13.63446634306079!3f28.73!4f0.7900000000000063!5f0.7820865974627469"
    }, {
        name: "Germany",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119232778!6m8!1m7!1sCAoSLEFGMVFpcE03bC02VThaN3c1N19uQ2VxYmxsaDFoU2haMVRiN0thdE1IMU9I!2m2!1d47.99517639017938!2d7.852932849698391!3f326.02!4f24.900000000000006!5f0.7951360383703611"
    }, {
        name: "Ghana",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119235842!6m8!1m7!1ss2jaeN-KjhsrQLbcMiGrpQ!2m2!1d6.695782542655994!2d-1.616583768625464!3f257.8!4f-8.159999999999997!5f0.4000000000000002"
    }, {
        name: "India",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119247070!6m8!1m7!1s1Axyv3l_iqt9yWzC4gIdqg!2m2!1d26.9238280486489!2d75.82707492149625!3f285.54!4f15.75!5f0.7820865974627469"
    }, {
        name: "Indonesia",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119250014!6m8!1m7!1s26jryH9JuOBs4IO9Y1QmOw!2m2!1d-3.082523173064316!2d119.9169088254661!3f228.56!4f8.569999999999993!5f0.7820865974627469"
    }, {
        name: "Iran",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119253733!6m8!1m7!1sCAoSLEFGMVFpcE8zSkxUdEhDSzYySVhzN0phX0VmeEQ5d2xVX0dlOGpQUEtNQ1pX!2m2!1d30.43255247853044!2d56.05729599476224!3f151.04!4f5.090000000000003!5f0.7820865974627469"
    }, {
        name: "Italy",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119265815!6m8!1m7!1sCAoSLEFGMVFpcFBhTnVyMlIzZkpXek01WENEbEVQSzdpOUNRN2FzSU1nampKTzZM!2m2!1d41.898224225052!2d12.47315876255!3f175.69!4f-6.549999999999997!5f0.4000000000000002"
    }, {
        name: "Japan",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119273227!6m8!1m7!1s-_0l0tU3lKz0JtaEsqJk7w!2m2!1d36.732632613848!2d138.4621769294279!3f132.59!4f-14.790000000000006!5f0.7820865974627469"
    }, {
        name: "Jordan",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119276293!6m8!1m7!1siUBbBTb3yDoFEFhUe4GnCg!2m2!1d31.95161115368211!2d35.93938839552868!3f308.12!4f-6.239999999999995!5f0.7820865974627469"
    }, {
        name: "Kenya",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119279399!6m8!1m7!1sGwPdUdRZdv9AXcFndU_EOQ!2m2!1d-1.283979405927672!2d36.82082780827069!3f336.57!4f-1.7600000000000051!5f0.4000000000000002"
    }, {
        name: "Latvia",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119286097!6m8!1m7!1s-36m3Um4REUCCCjuzfjYaA!2m2!1d56.9474378136615!2d24.10634993779821!3f91.94!4f6.810000000000002!5f0.4000000000000002"
    }, {
        name: "Lithuania",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119299805!6m8!1m7!1sCAoSLEFGMVFpcE5TRGRCUVJneGZzWi03dlZJYlhoN092amlabGRzY2pYanV4c0lJ!2m2!1d55.79833599951167!2d21.06708616018295!3f334.07!4f-2.6200000000000045!5f0.7820865974627469"
    }, {
        name: "Malaysia",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119309719!6m8!1m7!1sCAoSLEFGMVFpcE5DdGZnZGFGSlJ4aTNDNFlQTG9CUGR3cDNiYThnWVBHX1VIb0hk!2m2!1d3.2375917!2d101.684043!3f7.13!4f26.58!5f0.4000000000000002"
    }, {
        name: "Netherlands",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119343452!6m8!1m7!1sj1uAVlzaTU4GQyduJYzjuA!2m2!1d52.11311104606541!2d4.28028724851124!3f199.78!4f6.260000000000005!5f0.4000000000000002"
    }, {
        name: "New Zealand",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119346564!6m8!1m7!1sJCSiYBxjbDe_EPTZw_7gDQ!2m2!1d-39.5010521533879!2d176.918499552169!3f68.64!4f-1.1899999999999977!5f0.4000000000000002"
    }, {
        name: "Nigeria",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119352692!6m8!1m7!1sINHBz4HdSwMAAAQrBnftjg!2m2!1d9.080961517214682!2d7.524398838108427!3f84.34!4f-4.950000000000003!5f0.4000000000000002"
    }, {
        name: "Poland",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119378940!6m8!1m7!1seXEScTe7gqoljTOV4M_1PA!2m2!1d52.24940517758763!2d20.99231454742342!3f99.76!4f14.25!5f0.4000000000000002"
    }, {
        name: "Singapore",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119382058!6m8!1m7!1sb7tYegC8sOpQiSgx9CjtNA!2m2!1d1.280652667541553!2d103.8642833171509!3f41.99!4f-0.6500000000000057!5f0.4000000000000002"
    }, {
        name: "Spain",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119386122!6m8!1m7!1sCAoSLEFGMVFpcFA5cUFEM3NzZW5XT0R3cUZMSVQ2VmJ3QUQ0RnpsWGdLYmdtaHQ3!2m2!1d37.1760783!2d-3.5881413!3f12.6!4f1.8599999999999994!5f0.4000000000000002"
    }, {
        name: "Sweden",
        embed: "https://www.google.com/maps/embed?pb=!4v1687119389195!6m8!1m7!1sO7gt2w-yxeZI97e82gkunQ!2m2!1d65.80550118091678!2d21.67888296764118!3f202.99!4f0.8499999999999943!5f0.4000000000000002"
    }];

    const [country, setCounty] = useState(countries[1].name)

    return (
        <div className='geoguessr'>
            <b>
               Country
            </b>
            <select onChange={e => setCounty((e.target as HTMLSelectElement).value)}>
                {countries.map(({name}) => <option value={name}>{name}</option>)}
            </select>

            <div class="geoguessr-embed-wrapper">
                <iframe class="geoguessr-embed" src={countries.find(({name}) => name === country).embed} />
            </div>
        </div>
    )
}

export default FindCountry;