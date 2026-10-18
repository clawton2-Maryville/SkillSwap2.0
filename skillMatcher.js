const members = [
    { name: "Sarah", skill: "Photography" },
    { name: "Mike", skill: "Guitar" },
    { name: "Jessica", skill: "Cooking" },
    { name: "David", skill: "Web Design" },
    { name: "Emily", skill: "Spanish" }
];

function findSkill(skill) {
    return members.find(
        member => member.skill.toLowerCase() === skill.toLowerCase()
    );
}

module.exports = findSkill;
