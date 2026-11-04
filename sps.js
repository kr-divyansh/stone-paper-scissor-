let userScore =0;
let computerScore =0;


const choices =documennt.querySelectorAll('.choice');

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener('click', (e)=>{
const choiceId = choice.getattribute('id');

        console.log('choice was clicked', choiceId);

});
});

