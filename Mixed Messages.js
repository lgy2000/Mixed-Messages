const output={
    subject:['You are','Your brother is','Your sister is','Your mother is','Your grandfather is','Your cute rabbit is','Sam the chicken is','Rory the dinasour is','Your dog Charlie is','Your cat Kitty is','A ghost is','Kingsley the lion is','Kenny the hippopotamus is','Hubert the tiger is','The birds are','Nemo the fish is','Jack the crocodile is'],
    verb:['dancing','singing','coding','bathing','swimming','playing tennis','playing basketball','playing with the rubber ducky','crying','laughing','playing hide and seek','pooping'],
    place:['in the bathroom','at school','at home','at the hall','on the moon','on Mars','at the zoo','while dreaming'],
    randomSentence(){
        let num1=Math.floor(Math.random()*this.subject.length)
        let num2=Math.floor(Math.random()*this.verb.length)
        let num3=Math.floor(Math.random()*this.place.length)
        return `${this.subject[num1]} ${this.verb[num2]} ${this.place[num3]}.`
    }
}

console.log(output.randomSentence())