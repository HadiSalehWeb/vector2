# vector2
A simple vector2 type.

Example:

```javascript
const Vector2 = require('vector2');

const v1 = new Vector2(0, 1), v2 = new Vector2(2, 3);

const sum = v1.add(v2);
const mag = v1.magnitude();
const dot = v1.dot(v2);
```