// ITERATION 1

function Suspect(fName, lName, occu, age, desc, image, col) {
    this.firstName = fName;
    this.lastname = lName;
    this.occupation = occu;
    this. age = age;
    this.description = desc;
    this.image = image;
    this.color = col;
}

function Room(name) {
    this.name = name
}

function Weapon(name, weight) {
    this.name = name,
    this.weight = weight
}

// Suspects Collection
const suspectsArray = [
    new Suspect("Princess", "Flutterbutter", "Princess", "???", "Dreadfully bored by the games of court, the princess flits between these kinds of unusual occult parties in an enthusiastic effort to dissapoint her mother", "Young, blond, dangerous, and completely out of your league. In so many ways.", "White"),
    new Suspect("Colonel", "Battenberg", "Retired", "109?", "The old Colonel served faithfully until the day they told him he could retire. Then he kept serving until he was tricked to go on an important mission for figs, while the base changed all of it's locks", "Old, bald and not entirely sure where he is. Do not ask him about the war. He has apparently lived through all of them", "Pink"),
    new Suspect("Bishop", "Gingernut", "Bishop", "63", "The dullest man alive. He believes in an all powerful god that rains death on non-belivers, yet will choose to talk instead about his favourite washing machine colour", "Any woman's nightmare, and if the news is to believed, quite a few children's. Think a hairless mole with hairy moles, then stick it in a bishop's outfit and run away", "Red"),
    new Suspect("Uncle", "Timtam", "???", "53", "The good doctor's uncle. He drinks too much, and is entirely inappropriate to the Princess, but his magic tricks are astonishing. Perhaps you will never find out where he pulled that coin from", "Young, blond, dangerous, and completely out of your league. Or at least so he tells you. He looks more like a slapped arse to you.", "Green"),
    new Suspect("Director", "Wagonwheel", "Unemployed", "37", "No, no, he *is* employed as he'll tell anyone stupid enough to ask. The others wisely edge away as he punishes you with a detailed description of the screenplay he's been working on", "His long greasy hair forms curtains around his long greasy nose. His long greasy hoodie confirms him as unemployed", "Blue"),
    new Suspect("Professor", "Partyring", "Professor", "26", "The young Professor is celebrated as a genius in several fields. Unfortunately all of them are useless. He is a virtuoso at the engineering of unusual shades of blu-tac, the chemistry of bin cleaning and the mathematics of sneezles. You find him investigating the bins outside and decide not to interrupt.", "Young, cheerful, with hair like an electrocuted mop", "Orange")
];

// Rooms Collection
const roomsArray = [
    new Room('The Library'),
    new Room('The Kitchen'),
    new Room('The Conservatory'),
    new Room('The Leather Room'),
    new Room('The Dungeons'),
    new Room('The Batcave'),
    new Room('The Bar'),
    new Room('The Servants Quaters'),
    new Room('The Owlery'),
    new Room('The Daycare'),
    new Room('The Music Room'),
    new Room('The R&D Department'),
    new Room('The Greenhouse'),
    new Room('The Transfiguration Classroom'),
    new Room('The Observatory')
];

// Weapons Collection
const weaponsArray = [
    new Weapon('Your Mum', '99999999kg'),
    new Weapon('A Rusty Spoon', '100g'),
    new Weapon('A Backhanded Compliment', '0g'),
    new Weapon('The Colonel\'s Leather Whip', '2kg'),
    new Weapon('The Princess\' Tiara', '400g'),
    new Weapon('A Carefully Placed Banana Skin', '100g'),
    new Weapon('An Incorrectly Coloured Washing Machine', '300kg'),
    new Weapon('The Corona Virus', '0g'),
    new Weapon('Staggeringly Dull Conversation', '0g')
];

// ITERATION 2

// ITERATION 3