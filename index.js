let handleId = 0;

const h1 = document.getElementById("time")
const go = document.getElementById("go")
const stop = document.getElementById("stop")

function getTime() {
    const date = new Date()
    
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const time = `${hour}:${minutes}:${seconds}`

    h1.textContent = time;

}



go.onclick = function(){
    if(handleId==0){
        handleId = setInterval(getTime, 1000)
    }
}

stop.onclick = function(){
    clearInterval(handleId)
    handleId = 0;
}

getTime()

//인스타그램 하이퍼링크
function newPage() {
    window.open('https://www.instagram.com/1j1_0211/');
}

<input type="button" id="button" value="하고싶은말">
  
  <script>
    button.onclick = function() {
      alert('반가와요^o^');
    };
  </script>