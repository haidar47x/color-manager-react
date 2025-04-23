import useInput from '../hooks/useInput';
import { useColors } from '../hooks/useColors';

function AddColorForm() {

  const [nameProps, resetName] = useInput('');
  const [hexProps, resetHex] = useInput('');
  const { addColor } = useColors();

  const handleSubmit = e => {
    e.preventDefault();
    addColor(nameProps.value, hexProps.value);
    resetName();
    resetHex();
  };

  return (
    <section className="w-svw flex flex-col justify-center items-center mt-16">
      <div>
        <h3>Add Color</h3>
        <form className="flex flex-row gap-4 mt-4" onSubmit={handleSubmit}>
          <input {...nameProps} type="text" placeholder="Color Name" className="focus:outline-1 px-4 border-1 border-zinc-600 bg-zinc-700 text-zinc-100" required />
          <input {...hexProps} type="text" placeholder="#F4F4F4" className="focus:outline-1 px-4 border-1 border-zinc-600 bg-zinc-700 text-zinc-100" required />
          <button className="bg-zinc-700 text-zinc-100 p-2 px-4 font-semibold border-1 border-zinc-600 cursor-pointer hover:bg-zinc-600 hover:text-zinc-200 transition-colors duration-300"
                  type="submit">Add Color</button>
        </form>
        </div>
    </section>
  );
}

export default AddColorForm;
