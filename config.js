const dbConfig = {
    name: 'oleksandr',
    password: '1z2x3c4v',
    getUrl() {
        return `mongodb+srv://${this.name}:${this.password}@cluster0.otley.mongodb.net/todos`
    }
};
module.exports = dbConfig;
