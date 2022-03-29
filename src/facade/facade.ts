// Facade
// Wraps similar functions or modules inside a single interface.
//
// npx tsc facade.ts --target es5 && node facade.js


export interface UserInterface { 
    firstName: string;
    lastName: string;
    age: number;
    role: string;
    active: boolean;
}

export class User {
    private readonly user: UserInterface;

    constructor() {
        this.user = {
            firstName: "",
            lastName: "",
            age: 0,
            role: "",
            active: false
        }
    }

    public firstName(value: string) {
        this.user.firstName = value;
        return this;
    }

    public lastName(value: string) {
        this.user.lastName = value;
        return this;
    }

    public age(value: number) {
        this.user.age = value;
        return this;
    }

    public role(value: string) {
        this.user.role = value;
        return this;
    }

    public active(value: boolean) {
        this.user.active = value;
        return this;
    }

    public getInfo() {
        return this.user;
    }

    public activate() {
        this.user.active = true;
    }   

    public deactivate() {
        this.user.active = false;
    }
}

export class UserFacade {
    protected user: User;

    constructor(user: User) {
        this.user = user;
    }

    activateAccount() {
        this.user.activate();
        return this.user.getInfo();
    }

    deactivateAccount() {
        this.user.deactivate();
        return this.user.getInfo();
    }
}

const user = new User()
    .firstName("John")
    .lastName("Doe")
    .age(25)
    .role("admin");

console.log(user.getInfo());
console.log(new UserFacade(user).activateAccount());
console.log(new UserFacade(user).deactivateAccount());
