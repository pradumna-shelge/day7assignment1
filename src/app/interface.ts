export interface validation1{
    Id:string;
    name:fullName,
    dob:string,
    placeOfBirth:string,
    firstLanguage:string,
    address:Address
    }
    export interface Address{
        city: string,
           state: string,
           country: string,
           pin: number
   }
   export interface fullName{
    firstName: string,
        middleName: string,
        lastName: string
}