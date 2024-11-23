

export type Patient = {
    id: number, 
    name: string,
    date : string,
    effect:string, 
    tecnic : string, 
    design:string,
}


export type PatientsList = Patient & {
    amount : number
}