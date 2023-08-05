### Install Codegen
https://the-guild.dev/graphql/codegen/docs/getting-started/installation

### Folders structure

```tree
├── app
│   ├── layout.tsx
│   └── page.tsx
├── codegen.ts  // define config
├── gql
│   ├── fragment-masking.ts
│   ├── gql.ts
│   ├── graphql.ts  // generated query, use in application
│   └── index.ts
├── graphql
│   └── getSite.graphql  // define query
├── graphql.schema.json
├── next.config.js
├── next-env.d.ts
```

### Development
1. Start api server
https://github.com/DucNguyenVan/graphql-api

2. Start client
npm run dev

3. Access http://localhost:3000/ and see console.log

When update new schema at server side, client side need to sync the latest schema
4. Run codegen command to update latest schema
```cmd
npm run codegen --check
```


### Todo
- Implement watcher
- use SWR
