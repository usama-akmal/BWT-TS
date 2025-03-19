# BWT-TS

## Basic Commands

### Setup Node project
```shell
npm init
```

### Install Typescript
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
    "skipLibCheck": true,
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

### Create a src folder
```shell
mkdir src
```

### Create a typescript file in src directory
```shell
touch src/main.ts
```

### Compile with watch
```shell
npx tsc --watch
```

### Run using node
```shell
node dist/<file-name>.js
```

### Run using html
```html
<!-- Inject the generated javascript to html page -->
<script src="dist/<file-name>.js"></script>
```