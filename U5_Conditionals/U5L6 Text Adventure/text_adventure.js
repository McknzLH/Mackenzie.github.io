alert("POV: You're a famous explorer visiting two separately ruled small island kingdoms. Your goal is to reunite them so that everyone can live happily again. One of the kingdoms is Moroghol, dictated by King Morg. The other kingdom is Milliad, regulated by Queen Mila. Only a 75 ft cobbblestone bridge conjoin the islands. As you're venturing across it, the queen's daughter, Princess Millian, notices you. In the distance, Prince Roku of Moroghol seems to be approaching you on his palace horse.")

let princess_or_prince = prompt("Who do you speak to first? Type 1 to speak with the princess or 2 for the prince.");

if(princess_or_prince == 1) {
    let quest_or_plan = prompt("Prince Roku rides by as you approach the princess. She walks with you, explaining the lore and rivalry between Milliad and Moroghol. Then, you're offered a quest to help her seek revenge on King Morg. Will you (1) accept the quest and risk being caught, or (2) stick with the princess, but secretly plan your own way to unify the kingdoms?")
    if(quest_or_plan == 1) {
        alert("You and Princess Millian are caught by Prince Roku. The king has you both locked up, and the kingdoms continue to remain tense. Game over!");
    } else {
        alert("After many attempts, you convinced the princess and prince to work together. The kingdoms successfully reunited, and everyone is now neutral towards each other. Way to go!");
    }
    
} else {
    let offer_or_teamwork = prompt("You walk past the princess, and Prince Roku slows his horse while greeting you. He guides you across the bridge to Moroghol and requests that you help him steal a healing plant, hidden in Milliad's royal palace, under the king's order. Will you (1) accept the offer and temporarily stray from your main goal, or (2) convince the prince to betray his father, and work together with Princess Millian?")
    if(offer_or_teamwork == 1) {
        let procrastinate_or_action = prompt("As the moon rises a few hours later, Prince Roku and his men are ready to set out. However, your original plan comes back to mind, and you think about distracting the men so you can find a way to save both kingdoms. Will you (3) procrastinate a little longer, or (4) put that plan into action?")
        if(procrastinate_or_action == 3) {
            alert("You waited too long! Everyone was caught breaking into the palace, and locked up. The kingdoms remain unsaved. Game over!");
        } else {
            alert("Your distraction was successful, and the kingdoms were unified a few days later. You win!");
        }

    } else {
        alert("Too bad! One of the palace guards overheard your plan and alerted the king. Now you're locked up, and the kingdoms still hold tension. Game over!");
    }
}
