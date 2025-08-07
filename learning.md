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