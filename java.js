
let selectedSkill = '';
let questProgress = 0;

function generateQuest() {
    // Logic to generate a new quest
    // Update quest title and description
    document.getElementById('quest-title').innerText = 'New Quest';
    document.getElementById('quest-description').innerText = 'Quest description goes here';
}

function selectSkill(skill) {
    // Logic to handle skill selection
    selectedSkill = skill;
    console.log(`Selected skill: ${selectedSkill}`);
}

function completeQuest() {
    // Logic to handle quest completion
    if (selectedSkill !== '') {
        // Update quest progress
        questProgress += 25;
        document.getElementById('quest-progress').innerText = `Quest Progress: ${questProgress}%`;

        // Display reward message
        displayReward();
    } else {
        alert('Please select a skill before completing the quest.');
    }
}

function displayReward() {
    // Logic to determine and display rewards
    let rewardMessage = '';

    if (questProgress === 100) {
        rewardMessage = 'Congratulations! Quest completed. Take a break!';
    } else {
        rewardMessage = 'Quest completed. Consider taking a break.';
    }

    document.getElementById('reward-message').innerText = rewardMessage;
}
