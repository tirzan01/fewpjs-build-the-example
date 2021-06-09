// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById('modal')
modal.classList.add('hidden')
let hearts = document.getElementsByClassName('like-glyph')
let likeBtn = ()=>{
for (let i = 0; i < hearts.length; i++) { 
  hearts[i].addEventListener('click', ()=>{
    if(hearts[i].innerHTML === EMPTY_HEART){
    
    mimicServerCall()
      .then(e=>{
        alert(e)
        hearts[i].innerHTML = FULL_HEART
        hearts[i].classList.add('activated-heart')
      })
      .catch(err=>{
        modal.classList.remove('hidden')
        setTimeout(()=>{
          modal.classList.add('hidden')
        }, 5000)
      })
  }else{
    hearts[i].innerHTML = EMPTY_HEART
    hearts[i].classList.remove('activated-heart')
    
  }
  })
  
}

}

likeBtn()



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
