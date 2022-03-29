// Command
// A behavioral pattern that consists of encapsulating the logic required to execute an action inside an object.
//
// npx tsc command.ts --target es5 && node command.js

export interface Command {
    execute(): void;
}

class SomeCommand implements Command {
    private receiver: Receiver;
    private firstOp: string;
    private secondOp: string;

    constructor(first: string, second: string, receiver: Receiver) {
        this.receiver = receiver;
        this.firstOp = first;
        this.secondOp = second;
    }

    execute() {
        console.log("Here we go, executing the command....");
        this.receiver.firstOperation(this.firstOp);
        this.receiver.secondOperation(this.secondOp);
    }
}

class Receiver {
    public firstOperation(operation: string): void {
        console.log(`Got it, firstOperation: ${operation}`);
    }

    public secondOperation(operation: string): void {
        console.log(`Got it, secondOperation: ${operation}`);
    }
}

class Caller {
    private start: Command;
    private finish: Command;

    public setStart(command: Command) {
        this.start = command;
    }

    public setFinish(command: Command) {
        this.finish = command;
    }

    public call(): void {
        console.log("Calling the commands...");
        this.start.execute();

        console.log("Finished, calling the finish command...");
        this.finish.execute();
    }
}

const caller = new Caller();
const receiver = new Receiver()
caller.setStart(new SomeCommand("FIRST", "SECOND", receiver));
caller.setFinish(new SomeCommand("THIRD", "FOURTH", receiver));
caller.call();