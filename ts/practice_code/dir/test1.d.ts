type User = {
    name: string;
    age: number;
};
type Admin = {
    isAdmin: boolean;
    adminLevel: number;
};
type AdminUser = User & Admin;
declare const adminUser: AdminUser;
