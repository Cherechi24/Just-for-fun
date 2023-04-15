let message = [
    "The ghost of you follows me wherever i go, although i cannot see you,i can feel you standing a bit too close to my heart",
    "I wish we could restart, i wish we could have done it right, i wish you hadn't hurt me, and we could still be together how silly of me for dreaming of the impossible",
    "How painful it is to plan your future with someone then avoid eye contact when they are near? ",
    "I'll love you from a distance, celebrate your victories in silence, and cheer you on privately because you still hold my heart",
    "I think the worst part about you being gone is the fact that even in my dreams i cannot escape you.",
    "The mention of your name tears me to pieces, and i hate that you still have that power over me.",
    "I don't miss the boy i love, i miss my best friend, although i dont know if he exists anymore.",
    "I compare every man i meet to you, and although i grew to hate you, they're never as amazing as you were when we first met.",
    "When i buried our love, i think a part of me died too.",
    "In the moments i miss you most, i think about what you told her while claiming to love me and i am filled with anger again.",
    "I realized it when i chose to deal with the pain your presence brought me than try to survive your absence, that you had broken me.",
    "And it was in that moment, that small little second; i felt every feeling i ever had for you escape my body.",
    "When death takes my hand, i,ll take yours with the other as a vow to find you in every lifetime.",
    ]
    let button = document.querySelector('.button');
    let love = document.querySelector('.love');

    function clicked(){
        let randomNumber = Math.floor(Math.random() * message.length);
        love.innerHTML = message[randomNumber];
    }

    button.addEventListener("click" , clicked);
