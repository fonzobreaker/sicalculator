const output = document.querySelector("output");
const body = document.querySelector("body");
const numColors = 8;
const numTiming = 5;
const numTops = 3;
let earningRate = 0.00088787417;
const numberFormatter = new Intl.NumberFormat('it', { style: 'currency', currency: 'EUR', maximumFractionDigits: 4, minimumFractionDigits: 2 });
let amount = 0;
let bubblesTimers = [];
let nSpeed = 1;

document.getElementById('try-yours').addEventListener('click',povertyCalculator,false);

function createBubble(cost, text) {
  const left = Math.floor(Math.random() * 65);
  const aside = document.createElement("aside");
  aside.style.left = `${left + 5}vw`;
  aside.className = `color${Math.floor(Math.random() * numColors)} time${Math.floor(Math.random() * numTiming)} top${Math.floor(Math.random() * numTops)}`;
  aside.innerHTML = `<b>${secondsToHms(Math.floor(cost / earningRate))}</b>:<br>${text}<br/><i>${numberFormatter.format(cost)}</i>`;
  body.append(aside);
}
function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}
const bubbles = [
  { cost: 0.1, text: "he can now afford a goleador" }, 
  { cost: 0.7, text: "he can now afford a coffee" },
  { cost: 1.2, text: "he can now afford a cappuccino" },
  { cost: 2, text: "he can now afford a bullètt" }, 
  { cost: 3.9, text: "he can now afford one month of Amazon Prime" },
  { cost: 4, text: "he can now afford a MARIUS (by IKEA)" }, 
  { cost: 4.9, text: "he can now afford a one-way trip to work by bus" }, 
  { cost: 5, text: "he can now afford a pizza" }, 
  { cost: 7.9, text: "he can now afford one month Neflix subscription" }, 
  { cost: 9.8, text: "he can now afford to come back home by bus" }, 
  { cost: 9.9, text: "he can now afford one month Spotify subscription" }, 
  { cost: 15, text: "he can now afford one month Spotify subscription" },
  { cost: 20, text: "he can now afford to go to work by car for 1 day" },
  { cost: 36, text: "he can now afford one year of Amazon Prime" },
  { cost: 50, text: "he can now afford a 0.001 Bitcoin" },
  { cost: 100, text: "he can now afford a pair of Nike" },
  { cost: 800, text: "he can now afford an iPhone" },
  { cost: 1800, text: "he can now afford an Mac" },
]

bubbles.forEach(function (el) {
  bubblesTimers.push(setTimeout(`createBubble(${el.cost}, "${el.text}")`, (el.cost / earningRate) * 1000));
});

// For dark mode
document.body.addEventListener('click', () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
  // For light mode
  if (document.querySelector('body').classList.contains('dark-mode')) {
    document.getElementById('p').style.color = "black"
    document.getElementById('p').style.textShadow = `none` 
    document.getElementById('p2').style.color = "black"
    document.getElementById('p2').style.textShadow = `none`
    document.getElementById('p3').style.color = "black"
    document.getElementById('p3').style.textShadow = `none`
    
    for (let el of document.getElementsByTagName('span')) {
    	el.style.color = "white"; 
        el.style.background="black"
    }
  }

  // For light mode
  else {
    document.getElementById('p').style.color = "white" 
    document.getElementById('p').style.textShadow = `none`
    document.getElementById('p2').style.color = "white" 
    document.getElementById('p2').style.textShadow = `none` 
    document.getElementById('p3').style.color = "white" 
    document.getElementById('p3').style.textShadow = `none` 
    
    for (let el of document.getElementsByTagName('span')) {
    	el.style.color = "black"; 
        el.style.background="white"
    }
  }
})

function speedUp(n){    
	nSpeed = nSpeed * n;
	const secondsto_00001 = parseFloat(document.styleSheets[0].cssRules[0].style.getPropertyValue('--secondsto-00001'));
	const secondsto_0001 = parseFloat(document.styleSheets[0].cssRules[0].style.getPropertyValue('--secondsto-0001'));
	const secondsto_001 = parseFloat(document.styleSheets[0].cssRules[0].style.getPropertyValue('--secondsto-001'));
	const secondsto_01 = parseFloat(document.styleSheets[0].cssRules[0].style.getPropertyValue('--secondsto-01'));
    const secondsto_1 = parseFloat(document.styleSheets[0].cssRules[0].style.getPropertyValue('--secondsto-1'));
    const secondsto_10 = parseFloat(document.styleSheets[0].cssRules[0].style.getPropertyValue('--secondsto-10'));
    const secondsto_100 = parseFloat(document.styleSheets[0].cssRules[0].style.getPropertyValue('--secondsto-100'));
    const secondsto_1000 = parseFloat(document.styleSheets[0].cssRules[0].style.getPropertyValue('--secondsto-1000'));
    const secondsto_10000 = parseFloat(document.styleSheets[0].cssRules[0].style.getPropertyValue('--secondsto-10000'));
    const secondsto_100000 = parseFloat(document.styleSheets[0].cssRules[0].style.getPropertyValue('--secondsto-100000'));
    const secondsto_1000000 = parseFloat(document.styleSheets[0].cssRules[0].style.getPropertyValue('--secondsto-1000000'));
    const secondsto_10000000 = parseFloat(document.styleSheets[0].cssRules[0].style.getPropertyValue('--secondsto-10000000'));
    const secondsto_100000000 = parseFloat(document.styleSheets[0].cssRules[0].style.getPropertyValue('--secondsto-100000000'));
    
    document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-00001',secondsto_00001/n+"s");
    document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-0001',secondsto_0001/n+"s");
    document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-001',secondsto_001/n+"s");
    document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-01',secondsto_01/n+"s");
    document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-1',secondsto_1/n+"s");
    document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-10',secondsto_10/n+"s");
    document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-100',secondsto_100/n+"s");
    document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-1000',secondsto_1000/n+"s");
    document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-10000',secondsto_10000/n+"s");
    document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-100000',secondsto_100000/n+"s");
    document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-1000000',secondsto_1000000/n+"s");
    document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-10000000',secondsto_10000000/n+"s");
    document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-100000000',secondsto_100000000/n+"s");    
    
    clearBubbles();
}

function clearBubbles(){
	bubblesTimers.forEach(function (timer) {
      clearTimeout(timer);
    });
}

function povertyCalculator(){
	event.preventDefault();
  	event.stopImmediatePropagation();
	const income = prompt("Set your AGS, NET, RAL or annual income");
    if(parseFloat(income)){
    	earningRate = parseFloat(income) / 365 / 24 / 60 / 60;
    
        document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-00001',0.0001/earningRate+"s");
        document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-0001',0.001/earningRate+"s");
        document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-001',0.01/earningRate+"s");
        document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-01',0.1/earningRate+"s");
        document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-1',1/earningRate+"s");
        document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-10',10/earningRate+"s");
        document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-100',100/earningRate+"s");
        document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-1000',1000/earningRate+"s");
        document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-10000',10000/earningRate+"s");
        document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-100000',100000/earningRate+"s");
        document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-1000000',1000000/earningRate+"s");
        document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-10000000',10000000/earningRate+"s");
        document.styleSheets[0].cssRules[0].style.setProperty('--secondsto-100000000',100000000/earningRate+"s");
        clearBubbles();
        }
    
    bubbles.forEach(function (el) {
      bubblesTimers.push(setTimeout(`createBubble(${el.cost}, "${el.text}")`, (el.cost / earningRate) * 1000));
    });
}