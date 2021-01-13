function tellStory(Name, mood, activity) {
    if (typeof(Name && mood && activity) === "string") {
        console.log(`This is ${Name}. ${Name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`);
    }
}

tellStory("Danilo", "VeryGood", "play football and studied JavaScript");