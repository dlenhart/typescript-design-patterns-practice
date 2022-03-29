// Adapter
// Wraping an incompatible object in an adapter to make it compatable with another class.
//
// npx tsc adapter.ts --target es5 && node adapter.js


export class Target {
    public request(): string {
        return "Target: The default target's behavior.";
    }
}

export class Adaptee {
    public specificRequest(): string {
        return ".eetpadA eht fo roivaheb laicepS";
    }
}

class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

console.log(adapter.request());
