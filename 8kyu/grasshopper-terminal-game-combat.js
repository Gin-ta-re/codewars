// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

//My solution

combat = (health, damage) => damage > health ? 0 : health - damage