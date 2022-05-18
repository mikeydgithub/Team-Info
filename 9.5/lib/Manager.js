class Manager extends Employee {
    constructor() {
        this.officeNumber
        this.manager
    }

    getRole() {
        // overridden to return manager
        return {
            manager: this.manager
        }
    }

}

module.exports = Manager;