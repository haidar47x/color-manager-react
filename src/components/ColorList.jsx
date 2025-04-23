import Color from "./Color";
import { useColors } from "../hooks/useColors";

function ColorList() {

  const { colors } = useColors();

  if (!colors.length) {
    return (
      <div className="color-list h-svh flex flex-col items-center justify-center">
        <div className="">
          <p><em>Add some colors to <code>colors.json</code> file.</em></p>
          <p><a className="text-yellow-300 cursor-pointer hover:text-yellow-500" onClick={() => window.location.reload()}>Refresh</a></p>
        </div>
      </div>
    );
  }

  return (
    <div className="color-list w-svw flex flex-wrap gap-4 justify-center items-center">
      {colors.map(color => {
        return <Color key={color.id} {...color} />;
      })}
    </div>
  );
}

export default ColorList;
