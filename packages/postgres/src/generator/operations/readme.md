# Operations

An Operation is a single action to take against the database.

Creating operations is an intermediate step before generation, starting
with the Postgres catalog.

```mermaid

graph LR
Postgres --> Operation
Operation --> Typescript
```

And then from raw SQL scripts.

```mermaid

graph LR
SQLScript --> Operation
Operation --> Typescript
```
