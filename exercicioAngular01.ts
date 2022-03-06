



interface UseProps {
    firstName: string
    lastName: string
    userName: string
    email: string
    password: string
    cpf: number
    contact: string
    isAdmin: boolean
}





class User implements UseProps {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    cpf: number;
    contact: string;
    isAdmin: boolean;

    constructor(firstName: string, lastName: string, userName: string,
        email: string, password: string, cpf: number, contact: string, isAdmin: boolean) { }

    getfirstName(): string { return this.firstName }
    setfirstName(firstName: string): void { this.firstName = firstName }

    getlastName(): string { return this.lastName }
    setlastName(lastName: string): void { this.lastName = lastName }

    getuserName(): string { return this.userName }
    setuserName(userName: string): void { this.userName = userName }

    getemail(): string { return this.email }
    setemail(email: string): void { this.email = email }

    getpassword(): string { return this.password }
    setpassword(password: string): void { this.password = password }

    getcpf(): number { return this.cpf }
    setcpf(cpf: number): void { this.cpf = cpf }

    getcontact(): string { return this.contact }
    setcontact(contact: string): void { this.contact = contact }

    getisAdmin(): boolean { return this.isAdmin }
    setisAdmin(isAdmin: boolean): void { this.isAdmin = isAdmin }



}