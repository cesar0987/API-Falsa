const express = require('express');
const app = express();
const port = 3000;
const {faker} = require('@faker-js/faker');

class User {
  constructor() {
    this.id = faker.number.int();
    this.firtName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.email = faker.internet.email();
    this.phone = faker.phone.number();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this.id = faker.number.int();
    this.name = faker.company.name();
    this.direction = faker.location.street();
  }
} 

app.get('/api/user/new', (req, res) => {
    console.log('New user created');
    res.json(new User());
    });

app.get('/api/company/new', (req, res) => {
    res.json(new Company());
    }
);

app.get('/api/user/company', (req, res) => {
    res.json({user: new User(), company: new Company()});
    }
);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    }
);