## Next JS Server Component
- For server components: we use Async Await.
- They are default in NextJS 13+ version when using App Router.
- Can directly access the backend resources like Databases and Fetching Data from APIs, keeping sensetive data like API keys, large dependecies.
- Can't use hooks like useEffect, useState etc.
- Can't use browser APIs.


```javascript
// app/users/page.tsx
async function getUsers() {
  const res = await fetch('https://api.example.com/users')
  return res.json()
}

export default async function UsersPage() {
  const users = await getUsers()
  
  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}
```

## Client Components
- Used when there is any interaction requried like input fields, button clicks etc.
- For Browser's API like Geolocation, Clipboard APIs etc.
- React hooks.
- Component lifecycle methods.
- mark the component with *'use client'.*

```javascript
'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```


## Sending data using Link Component
We can use params when using path parameters and searchParams for query parameters

### Path Parameter:
- www:/url/category/productName/123
- /users/123/posts/456             *// Clean, hierarchical*
- /products/electronics/laptops    *// Good for categories*
- used when parameters are required/ mandoatory, SEO friendly URLs
```javascript
<Link href={`/products/${category}/${id}`}>
  View Product
</Link>
```

### Query Parameter:
- www:/url/?category=books
- /search?q=laptop&price=1000     *// Good for filters*
- /products?category=electronics&sort=price  *// Good for options*
- used when parameters are optional, for Filtering, Sorting etc.
```javascript
<Link href={`/products?category=electronics&sort=price`}>
  Electronics
</Link>
```


