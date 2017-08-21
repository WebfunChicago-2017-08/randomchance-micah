function randomChance(quarters) {
    var turns = quarters;
    var pot = quarters;
    var payout;

    while (turns > 0) {
        var spin = Math.trunc(Math.random() * 100);
        console.log("The spin landed on", spin);
        turns--;
        if (spin === 1) {
            console.log("WINNER WINNER CHICKEN DINNER!!");
            payout = Math.trunc(Math.random() * 50) + 50;
            console.log("You had", turns, "quarters left.");
            console.log("You won", payout, "quarters!");
            turns += payout;
            console.log("You now have", turns, "quarters remaining.");

        }
    }
}

randomChance(5);