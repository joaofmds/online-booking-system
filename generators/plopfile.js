export default function (plop) {
  plop.setGenerator("entities", {
    description: "Create a new entity",
    prompts: [{ type: "input", name: "name", message: "What is the name of the entity?" }],
    actions: [...entitiesCreations],
  });
  plop.setGenerator("useCases", {
    description: "Create a new useCase",
    prompts: [
      { type: "input", name: "name", message: "What is the name of the useCase?" },
    ],
    actions: [...useCaseCreations],
  });
  plop.setGenerator("test", {
    description: "Create a new test",
    prompts: [
      { type: "input", name: "name", message: "What is the name of the file?" },
      { type: "input", name: "entity", message: "What is the name of the entity?" },
      { type: "input", name: "layer", message: "What is the name of the layer?" },
    ],
    actions: [
      {
        type: "add",
        path: "../src/slices/{{camelCase entity}}/{{camelCase layer}}/{{pascalCase name}}.spec.ts",
        templateFile: "./templates/test.spec.ts.hbs",
      },
    ],
  });
}

const useCaseCreations = [
  // Repository
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/repositories/contracts/index.ts",
    templateFile: "./templates/repositories/contracts/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/repositories/contracts/Add{{pascalCase name}}Repository.ts",
    templateFile: "./templates/repositories/contracts/AddDomainRepository.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/repositories/contracts/Load{{pascalCase name}}Repository.ts",
    templateFile: "./templates/repositories/contracts/LoadDomainRepository.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/repositories/contracts/Load{{pascalCase name}}ByPageRepository.ts",
    templateFile: "./templates/repositories/contracts/LoadDomainByPageRepository.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/repositories/contracts/Delete{{pascalCase name}}Repository.ts",
    templateFile: "./templates/repositories/contracts/DeleteDomainRepository.ts.hbs",
  },
  //AddDomain
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/Add{{pascalCase name}}/Add{{pascalCase name}}.ts",
    templateFile: "./templates/useCases/addDomain/AddDomain.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/Add{{pascalCase name}}/Add{{pascalCase name}}.spec.ts",
    templateFile: "./templates/useCases/addDomain/AddDomain.spec.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/Add{{pascalCase name}}/index.ts",
    templateFile: "./templates/useCases/addDomain/index.ts.hbs",
  },
  // LoadDomain
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/Load{{pascalCase name}}/Load{{pascalCase name}}.ts",
    templateFile: "./templates/useCases/loadDomain/LoadDomain.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/Load{{pascalCase name}}/Load{{pascalCase name}}.spec.ts",
    templateFile: "./templates/useCases/loadDomain/LoadDomain.spec.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/Load{{pascalCase name}}/index.ts",
    templateFile: "./templates/useCases/loadDomain/index.ts.hbs",
  },
  // LoadDomainByPage
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/Load{{pascalCase name}}ByPage/Load{{pascalCase name}}ByPage.ts",
    templateFile: "./templates/useCases/loadDomainByPage/LoadDomainByPage.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/Load{{pascalCase name}}ByPage/Load{{pascalCase name}}ByPage.spec.ts",
    templateFile: "./templates/useCases/loadDomainByPage/LoadDomainByPage.spec.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/Load{{pascalCase name}}ByPage/index.ts",
    templateFile: "./templates/useCases/loadDomainByPage/index.ts.hbs",
  },
];

const entitiesCreations = [
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/entities/index.ts",
    templateFile: "./templates/entities/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/entities/{{camelCase name}}Entity.ts",
    templateFile: "./templates/entities/DomainEntity.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/entities/{{camelCase name}}Entity.spec.ts",
    templateFile: "./templates/entities/DomainEntity.spec.ts.hbs",
  },
];
