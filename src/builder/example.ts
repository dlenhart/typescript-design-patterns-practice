// Builder Pattern
//
//npx tsc example.ts --target es5 && node example.js 

import { User, UserBuilder } from "./user.builder";

const newUser: User = new UserBuilder("Drew Lenhart")
    .setAge(39)
    .setPhone("(123) 456-7890")
    .setAddress("123 Main St.")
    .build();

console.log(newUser);