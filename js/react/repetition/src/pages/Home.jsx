import { useTheme, toggleColor } from "../context/Theme.contex";

function Home() {
   const [theme, setTheme] = useTheme();
   return (
      <div>
         <h1>Hello there</h1>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, facere? Sed, consectetur temporibus deserunt, perferendis quisquam soluta nulla, vel laboriosam commodi obcaecati pariatur cumque voluptas. Tenetur quisquam quasi error accusamus!</p>
         <button onClick={() => setTheme(toggleColor(theme.type))}>Change theme</button>
      </div>
   );
}

export default Home;