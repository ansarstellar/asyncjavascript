getUser(1, (user) => {
    console.log(user);

    getRepos(user.githubUsername, (repos) => {
        console.log("Repos", repos);
    });
});

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading a user from DB...");
        callback({
            id: id,
            githubUsername: "ansarstellar",
        });
    }, 2000);
}

function getRepos(username, callback) {
    setTimeout(() => {
        console.log("Reading repos...");
        callback({
            username: username,
            repositories: ["repo1", "repo2", "repo3"],
        });
    }, 1000);
}
