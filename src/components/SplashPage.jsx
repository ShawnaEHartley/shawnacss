import { useState, useEffect } from 'react';
import Header from './Header/Header';

// functional components
import Calc from './Calc/Calc';
// import Clock from './Clock/Clock';

// drawing css files
// import '../Drawings/pomodora.css';

function SplashPage() {

    const [secondRatio, setSecondRatio] = useState(0);
    const [minuteRatio, setMinuteRatio] = useState(0);
    const [hourRatio, setHourRatio] = useState(0);

    const setClock = () => {
        const currentDate = new Date();
        const seconds = currentDate.getSeconds() / 60;
        const minutes = (currentDate.getMinutes() + seconds) / 60;
        const hours = (currentDate.getHours() % 12 + minutes) / 12;

        setSecondRatio(seconds);
        setMinuteRatio(minutes);
        setHourRatio(hours);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock();
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const dark_teal = '#33475b';
    const gray = '#6B7888';
    const mauve = '#593D48';
    const light_yellow = '#FFF7D6';
    const dark_green = '#006A5A';
    const terracotta = '#8C3032';
    const brown = '#574240';


    return (
        <div id='page-wrapper'>
            <div id='header'>
                <Header />
            </div>
            <div id='grid'>
                {/*
                <div className='square working'>House</div>
                <div className='square working'>Tree</div>
                <div className='square working'>Flower</div>
                <div className='square working'>Car</div>
                <div className='square working'>Boat</div>
                <div className='square working'>Snowflake</div>
                <div className='square working'>Snowman</div>
                <div className='square working'>Rainbow</div>
                <div className='square working'>Umbrella</div>
                <div className='square working'>Cat</div>
                <div className='square working'>Bicycle</div>
                <div className='square working'>Piano</div>
                <div className='square working'>Pencil</div>
                <div className='square working'>Guitar</div>
                <div className='square working'>Book</div>
                <div className='square working'>Camera</div>
                <div className='square working'>Computer</div>
                <div className='square working'>Phone</div>
                <div className='square working'>Television</div>

                <div className='wide working'>Airplane</div>
                <div className='square working'>Spaceship</div>
                <div className='square working'>Rocket</div>
                <div className='square working'>Star</div>
                <div className='square working'>Moon</div>
                <div className='square working'>Sun</div>
                <div className='square working'>Cloud</div>


                <div className='square working'>Eiffel Tower</div>
                <div className='square working'>Light Bulb</div>
                <div className='square working'>Tic Tac Toe</div> 
                
                <div className='square working'>Heart</div>
                <div className='square working'>Soccer Ball</div>
                */}

                {/* <div className='tall' style={{backgroundColor: dark_teal}} ><Calculator /></div> */}


                <div className='tall' style={{backgroundColor: dark_teal}} ><Calc /></div>


                {/* <div className='square' style={{backgroundColor: mauve}}><Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio} /></div> */}


                {/* <div className='square' id='pomodora' style={{backgroundColor: light_yellow}}>
                    <div id="tomato">
                        <div id="tomatoTop"></div>
                    </div>
                </div> */}

                
            </div>
        </div>
    )
}

export default SplashPage;