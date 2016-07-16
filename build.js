({
    baseUrl: ".",
    name: "node_modules/almond/almond",
    include: ["build/main"],
    insertRequire: ["build/main"],
    out: "build/main.bundle.js",
    wrap: true
})