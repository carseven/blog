---
title: Example Reference
description: A reference page in my new Starlight docs site.
---

Reference pages are ideal for outlining how things work in terse and clear terms.
Less concerned with telling a story or addressing a specific use case, they should give a comprehensive outline of what you're documenting.

## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework


```mermaid
flowchart TD
    A[Start] --> B{Is it working?}
    B -- Yes --> C[Great!]
    B -- No --> D[Check the logs]
    D --> E[Fix the issue]
    E --> B
```