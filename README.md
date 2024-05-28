# Full-Cycle 3.0 - Docker

## 2º Desafio - Nginx Proxy Reverso

- [x] Acessar Nginx, fazer chamada para aplicacao NodeJS
- [x] NodeJS adicionara um registro em uma tabela people no mySQL
- [x] Retorno do aplicacao NodeJS: 
    - Full Cycle Rocks!
    - Lista de nomes cadastrados

# Files

```
raiz/
├── .gitignore
├── docker-compose.yaml
├── Dockerfile
├── README.md
├── mysql/
│   └── table.sql
├── nginx/
│   ├── Dockerfile
│   └── nginx.conf
└── node/
    ├── node_modules/
    ├── Dockerfile
    ├── index.js    
    ├── package-lock.json
    └── package.json
```

# Execução

```bash$ 
$ docker-compose up -d --build 
```

