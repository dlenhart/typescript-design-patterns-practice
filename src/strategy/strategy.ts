// Strategy Pattern
//
// npx tsc strategy.ts --target es5 && node strategy.js 

export interface FavoriteWorkout {
    begin(): void;
}

export class Running implements FavoriteWorkout {
    begin(): void {
        console.log('Running');
    }   
}

export class Cycling implements FavoriteWorkout {
    begin(): void {
        console.log('Cycling');
    }   
}

export class Swimming implements FavoriteWorkout {
    begin(): void {
        console.log('Swimming');
    }   
}

export class Yoga implements FavoriteWorkout {
    begin(): void {
        console.log('Yoga');
    }   
}

class Person {
    private name: string;
    private favoriteWorkout: FavoriteWorkout;

    constructor(name: string, workout: FavoriteWorkout) {
        this.name = name;
        this.favoriteWorkout = workout;
    }

    public workout(): void {
        console.log(`${this.name} is: `);
        this.favoriteWorkout.begin();
    }
}

const person = new Person("Drew Lenhart", new Swimming());

person.workout();