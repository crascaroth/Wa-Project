export type inputRawEditLab = {
    id: string,
    nome: string | undefined,
    endereco: string | undefined
    }

export type InputRawLab = {
    nome: string,
    endereco: string
} 

export type InputCompleteLab = {
    id: string,
    nome: string,
    endereco: string
    
}

export type RequestCompleteLab ={
    id: string,
    nome: string,
    endereco: string,
    status: number
}