document.querySelector('#getMedia').addEventListener('click', fetchData)


function fetchData(){
  let choice =  document.getElementById('dateSelector').value 
    let url = `https://api.nasa.gov/planetary/apod?api_key=GOHKtZQIOOkb8FgAe00CF7aQo2HxwghmPUToaB9V&date=${choice}`
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        document.querySelector('#picture').src = data.hdurl
        let explanation= document.querySelector('#text')
        explanation.innerText = data.explanation
        explanation.prepend('Explanation:  ')



    })
    

}