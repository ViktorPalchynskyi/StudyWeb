enum Seasons {
   winter,
   spring,
   summer,
   autum,
};

function someEx(season: Seasons) {
   switch (season) {
      case Seasons.winter:
         return 'WI';
      case Seasons.spring:
         return 'SP';
      case Seasons.summer:
         return 'SU';
      case Seasons.autum:
         return 'AU';
   }
}

console.log('Where is my fucning function???', someEx(Seasons.autum));

function someEx2(someState: string): [initialState: string, useState: (newState: string) => void] {
   const initialState: string = someState;
   const useState = (newState: string): void => console.log(newState);

   return [initialState, useState];
};

const [state, useState] = someEx2('ulyalya');
useState('Lya');