const tweetForm = document.querySelector('#tweetForm')
const tweetcontainer = document.querySelector('#tweets')

tweetForm.addEventListener('submit', function(e){
    e.preventDefault()
    const usernameinput = document.querySelectorAll('input')[0]
    const tweetinput = document.querySelectorAll('input')[1]

    addtweet(usernameinput.value, tweetinput.value)
    usernameinput.value = '';
    tweetinput.value = '';
})


const addtweet = function(username, tweet){
    const make = document.createElement('li')
    const btag = document.createElement('b')

    btag.append(username)
    make.append(btag)
    make.append(` - ${tweet}`)
    tweetcontainer.append(make);
}