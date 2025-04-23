import { useState, createContext } from 'react';
import colorData from '../assets/colors.json';

const ColorContext = createContext();

function ColorProvider({ children}) {
  const [colors, setColors] = useState(colorData);

  const addColor = (name, hex) => setColors([...colors, {name, hex, id: Date.now(), rating: 0}]);
  const removeColor = id => setColors(colors.filter(c => c.id !== id))
  const rateColor = (id, rating) => setColors(colors.map(c => c.id === id? {...c, rating} : c));

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export { ColorContext };
export default ColorProvider;
