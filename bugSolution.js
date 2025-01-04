```javascript
import React from 'react';
import { FlatList, Text } from 'react-native';

const DATA = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, { id: 3, name: 'Item 3' }, { id: 1, name: 'Item 4' }];

const App = () => {
  const renderItem = ({ item }) => <Text>{item.name}</Text>;

  const keyExtractor = (item) => item.id.toString(); // Correct keyExtractor using a unique ID

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={keyExtractor} 
    />
  );
};

export default App;
```

If `id` is not guaranteed to be unique:

```javascript
const keyExtractor = (item, index) => item.id + '-' + index.toString();
```