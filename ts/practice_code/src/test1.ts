type User = {
   name: string;
   age: number;
}

type Admin = {
   isAdmin: boolean;
   adminLevel: number;
}

type AdminUser = User & Admin;

const adminUser: AdminUser = {
   name: 'Viktor',
   age: 25,
   isAdmin: true,
   adminLevel: 5
}