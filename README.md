# BWT-TS

## Basic Commands

### Setup new project
```shell
npm install typescript --save-dev
```

### Compile file (OPTIONAL)
```shell
npx tsc <file-name> ...
```

### Setup Typescript project using tsconfig.json

```shell
npx tsc --init
```

### Content tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src", 
    "outDir": "./dist",
    "esModuleInterop": true,   
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

### Create A src folder
```shell
mkdir src
```

### Compile with watch
```shell
npx tsc --watch
```

### Run using node
```shell
node dist/<file-name>.js
```
