class Manager extends Employee {
    constructor() {
        this.officeNumber
    }

    getRole() {
        // overridden to return manager
        return {
            manager: this.manager
        }
    }

}