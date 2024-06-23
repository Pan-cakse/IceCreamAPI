type Project = {
    name: string,
    repo: string
}

const PROJECTS: Map<string, Project> = new Map();

PROJECTS.set("icecream", {
    name: "IceCream",
    repo: "IceCreamMC/IceCream"
});

PROJECTS.set("snowcone", {
    name: "Snowcone",
    repo: "IceCreamMC/Snowcone"
});

export default PROJECTS;