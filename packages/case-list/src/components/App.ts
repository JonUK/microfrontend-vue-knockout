import Person from "../models/person";

class App {
    person: Person;

    constructor() {

        // These values are hard-coded but could come from a server API request with JSON response
        this.person = new Person(
            'Jon',
            'Keeping',
            ['The Matrix', 'The Shawshank Redemption', 'Upgrade']
        )
    }
}

// The default export returns the component details object to register with KO
export default { viewModel: App, template: require('./App.html') };
