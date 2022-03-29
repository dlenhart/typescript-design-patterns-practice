// Builder Pattern
//
// npx tsc car.builder.ts --target es5 && node car.builder.js 

export interface Auto {
    make: string;
    model: string;
    year: number;
}

export class CarBuilder {
    private readonly car: Auto;

    constructor() {
        this.car = {
            make: "",
            model: "",
            year: 0
        };
    }

    make(value: string): CarBuilder {
        this.car.make = value;
        return this;
    }

    model(value: string): CarBuilder {
        this.car.model = value;
        return this;
    }

    year(value: number): CarBuilder {
        this.car.year = value;
        return this;
    }

    build(): Auto {
        return this.car;
    }
}

const newCar = new CarBuilder()
    .make("Mercury")
    .model("Cougar")
    .year(1989);

console.log(newCar);
