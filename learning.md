# nestjs-from-scratch

A hands-on repository to explore and practice the fundamentals of NestJS — from basic setup to building scalable APIs.

# npm i -g @nestjs/cli to install nestjs once

# make sure nest is installed by using nest --version

# check command or things that can be donr by nest --help

# start a new project:- nest new

# anything that starts with @ is decorator like @Controller(), @Body(), @Injectable(), @Param() etc

# Decorator

    # @Controller() → marks a class as a controller.

    # @Get() → marks a method to handle GET requests.

    # @Injectable() → tells Nest this class can be injected (used as a service).

    # @Body() → gets data from the request body.

    # @Param() → gets data from URL parameters.

# Modules:- A module is like a folder in your app that groups related things together (like controllers and services).

# Think of it as a box that contains:

    # Controllers (handle requests like GET, POST)

    # Services (do the actual work or logic)

    # Other modules (if needed)

# A module in NestJS is like a container or folder where related parts of your app live together — like controllers, services, etc.

    # Imagine you're building a house:

    # The Kitchen is one module.

    # The Living Room is another module.

    # Each room has its own tools and rules, but they all come together to form the whole house.

# to create new module:- nest g module coffees(name)

# Inside Module

    # controllers | Handles requests | Like a receptionist taking customer requests | @Get(), @Post()

    # providers:- Contains logic (usually services) | Like workers doing the actual job | 	UserService, DatabaseService

    # imports:- Uses other modules | Like borrowing tools from neighbors | imports: [AuthModule]

    # exports:- Share things with others | Like giving your tools to others to use | exports: [UserService]

# DTO

nest g class coffees/dto/create-coffee.dto --no-spec

# A DTO is mainly used to define the structure and type of the data you're expecting — like a form or a contract.

# export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {} :- to use the same schema from createcoffeedto. to reduce repeat code.

# For validation:-

app.useGlobalPipes(new ValidationPipe({
whitelist:true, //if the schema is not defined in dto then it doesn't includes while post
forbidNonWhitelisted:true // shows error is the schema is not involved in dto
}))

# Docker

1.  Create a yml file: `docker-compose.yml`

- Run the command `docker-compose up -d`. It is the command to start your services in detached mode — meaning they’ll run in the background without blocking your terminal.

# ORM

- npm i @nestjs/typeorm typeorm pg
  ORM stands for Object-Relational Mapping.

In simple terms:
It’s a tool or technique that lets you talk to your database using objects in your programming language instead of writing raw SQL queries.

Think of it like this:

- Without ORM: You tell the database directly what to do with SQL (SELECT \* FROM users WHERE id = 1).

- With ORM: You interact with your data as if they were normal objects in your code (User.find(1)), and the ORM translates that into SQL for you.

# Entity

In ORM, an Entity is basically a class that represents a table in your database.

- Each property of the class = a column in the table.

- Each instance of the class = a row in the table.

- @PrimaryGeneratedColumn() = Auto-increment primary key

# @InjectRepository()

“NestJS, please give me the database helper for this table so I can use it in my class.”

# Migration

    - npx typeorm migration:create src/migrations/CoffeeRefactor (Path)
    (Run migration)
    - npx typeorm migration:run -d dist/typeorm.config.js

# Custom providers

In NestJS, a provider is just something you can inject (like a service, value, or object).
Custom providers = special ways to create providers.

There are 4 main types:

1. useValue → give a fixed value
   - {
     provide: 'API_KEY',
     useValue: '123456'
     }

➡️ Always gives "123456" when injected.

1. useClass → use another class instead
   - {
     provide: 'CONFIG',
     useClass: MockConfigService
     }

➡️ When you ask for 'CONFIG', Nest will give you MockConfigService.

1. useFactory → create with a function
   - {
     provide: 'TOKEN',
     useFactory: () => Math.random()
     }

➡️ Runs the function and gives the result (e.g., a random number).

4. useExisting → alias another provider
   - {
     provide: 'LOGGER',
     useExisting: LoggerService
     }

➡️ 'LOGGER' is just another name for LoggerService.

👉 In short:

useValue = give a value

useClass = give a class

useFactory = give result of a function

useExisting = give an alias
