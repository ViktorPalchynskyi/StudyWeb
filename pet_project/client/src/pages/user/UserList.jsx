import { useSearchParams } from 'react-router-dom';

export default function User() {
   const [searchParams, setSearchParams] = useSearchParams({ name: 'Vika' });
   const name = searchParams.get('name');
   console.log('name', name);
   return (
      <div>
         <div>User №1 is Viktor</div>
         <div>User №2 is Mikhail</div>
         <input
            type='text'
            value={name}
            onChange={e => setSearchParams({ name: e.target.value })}
         />
      </div>
   );
}