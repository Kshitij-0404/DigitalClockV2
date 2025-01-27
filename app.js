// let container = document.getElementById("container");

// let clock = document.getElementById('div');

// console.log(currTime);

// function getTime(){
//     let para = document.createElement('p');
//     para.textContent = time.toLocaleTimeString();
//     // console.log(para);
//     clock.appendChild(para);
//     document.body.append(clock);
// }
// setInterval(getTime,1000);
// setTimeout(getTime, 0);

let thoughts = ["Time is a precious resource—once lost, it can never be regained. Use every moment wisely.","Procrastination steals your future. Start now, even if it’s small steps, and watch your dreams grow.", "Every day has 1,440 minutes. Invest them in what truly matters to you.","Don’t let today slip away; it’s your opportunity to build a better tomorrow." , "Time doesn’t slow down, and neither should your efforts to chase your goals." , "The greatest gift you can give yourself is to live fully in every moment." , "You can’t control the passage of time, but you can decide how to spend it meaningfully." , "Each tick of the clock is a chance to start fresh. Don’t wait for the perfect time—it doesn’t exist." , "Your future self is shaped by how you use your time today. Make it count." , "Time is a mirror reflecting your priorities. Focus on what truly brings value to your life." , "Don’t let the fear of failure rob you of precious time. Take the leap, learn, and grow." , "The hours you spend wisely today will become the foundation of your success tomorrow." , "Regret comes from wasted time. Take action now to live a life without 'what ifs' and 'if onlys'." , "Each day is a blank page. Use your time to write a story worth remembering." , "What you do in your free time determines your future freedom. Use it wisely." , "Time is a gift. Don’t squander it on things that don’t align with your purpose." , "Opportunities are like sunrises; if you wait too long, you’ll miss them. Act while there’s time." , "Success is built on the compound interest of time invested daily in small, meaningful efforts.", "The best way to honor time is to transform it into moments of growth, kindness, and achievement." , "Life is a collection of moments. Make sure the time you spend today adds up to a life you’re proud of."]

function getTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if(hour >= 12){
        if(hour > 12){
            hour %= 12;
        }
        am_pm = "PM";
    }
    else if(hour==0){
        hour+=12;
        am_pm = "AM";
    }

    hour = hour < 10? "0"+hour : hour;
    min = min < 10? "0" + min : min;
    sec = sec < 10? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

    document.getElementById('clock').innerHTML = currentTime;

}

getTime();

setInterval(getTime, 1000.9);


let motivation = document.getElementById('Motivation');

function delay(waitTime){
    return new Promise(resolve => setTimeout(resolve,waitTime))
}

async function showThoughts(){
    for(let i = 0; i<20; i++){
        motivation.textContent = thoughts[i];
        console.log(motivation.textContent);
        await delay(6000000);
        if(i==20){
            i = 0;
        }
    }
    console.log("all done");
}

showThoughts();
