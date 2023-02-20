type Raven = {
   quoth: () => void;
}

type Dove = {
   kurkyk: () => void;
}

type Bird = Raven | Dove;

const poehovshyi = {
   kurkyk: () => console.log('kurlyk, kurlyk'),
   name: 'Sidor',
} as Dove;

poehovshyi.kurkyk();

