

function chama() {
  let imagem = document.getElementById('img-frame')
  let btn = $("#dateSearch").val()
  console.log(btn)
 


    fetch('https://api.nasa.gov/planetary/apod?api_key=pOwBAdf2wrjTLhAdv7bD6SvZEPyaupu1osGM41nW' + "&" + "date=" + btn ).then(r => {r.json().then(resposta => {
      console.log(resposta)
      
      // document.getElementById('frame').contentWindow.document.style. = resposta.url
      corpo.style.backgroundImage = resposta.url
      document.getElementById("title").innerText = resposta.title
      document.getElementById("date").innerText = resposta.date
      document.getElementById("imagem").src = resposta.url
    })
    
  })
  
}