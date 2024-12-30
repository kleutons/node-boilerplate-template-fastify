# NODE BOILERPLATE - TYPESCRIPT FASTIFY EDITION
<img src="./.github/assets/node.FastfyTs.png" alt="Logo" height="300">


### Don't start a new Node project from zero!
### Use this simple **Nodejs** boilerplate with pre-configured **Typescript** and **FASTIFY** in a modern way.

<br />
  <!-- Badges -->
<div align="center">

[![Typesript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/kleutons) 
[![NODE.JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://github.com/kleutons)
[![FASTIFY](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)](https://github.com/kleutons)

</div>

<br />

# 🚀 Technologies

This code source was developed with the following items:

### 📦 Dependencies

- [typescript][typescript-npm] - Superset for application scale JavaScript development
- [tsx][tsx-npm] - TypeScript Execute (tsx): Enable Node.js to run TypeScript
- [tsup][tsup-npm] - Bundle your TypeScript library with no config, powered by esbuild
- [@types/node][@types/node-npm] - type definitions for node
- [fastify][fastify-npm] - Fast and low overhead web framework, for Node.js
- [@fastify/cors][@fastify/cors-npm] - Fastify CORS



## 🧩 Layered Project Structure
```
src/
├── controllers/
│   ├── item.controller.ts
│   └── ...
├── services/
│   ├── item.service.ts
│   └── ...
├── models/
│   ├── items.model.ts
│   └── ...
├── routes/
│   ├── item.routes.ts
│   └── ...
├── data/
│   └── database-memory.ts
├── errors/
│   ├── http-error.ts
│   ├── http-error-messages.ts
│   └── http-status-codes.ts
└── main.ts
```

### 📃 Code Structure
- **Controllers (controllers/):** Contains the logic to process HTTP requests.
- **Services (services/):** Contains the business logic and interacts with the database.
- **Models (models/):** Defines the data structure.
- **Routes (routes/):** Defines endpoints and associates routes with controllers.
- **Errors (errors/):** Contains the definition of custom errors and HTTP status codes.
- **Data (data/):** Contains the in-memory database implementation.
  

# ⚡ Scripts

- `npm run dev`: Runs the server in development mode with environment variables loaded from the .env file.
- `npm run build`: Compiles TypeScript files to JavaScript in the build directory.
- `npm run start:build`: Compiles the project and runs the compiled version from the build directory.

# 👨‍💻 How To Use

click in **[Use this template]** OR

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v20+](https://nodejs.org/en/) + [NPM v10+](https://nodejs.org/en/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/kleutons/node-boilerplate-template-fastify

# Go into the repository
$ cd node-boilerplate-template-fastify

# Install dependencies
$ npm install

# Update All Packages  
$ npm update
  
# To update all dependencies listed in your package.json to the latest stable version.
$ npx npm-check-updates -u
$ npm install

```


# 🌐 Usage Example

- Create a New Item
  - Route: **POST /items**
  - ``` { "name": "Novo Item" } ```
- List Itens
  - Route: **GET /items**
  - ``` [ { "id": "1", "name": "Item 1" }, { "id": "2", "name": "Item 2" } ```
- etc...


## Author

| [<img src="https://avatars3.githubusercontent.com/u/106082564?s=96&v=4"><br><sub>Kleuton Novais</sub>](https://github.com/kleutons) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
|                                            [Linkedin](https://www.linkedin.com/in/kleuton-novais/)                                             |