//questo e il modello del nostro record, in shared perche usato da piu componenti
export interface ListaTodo {
    id: number,
    todo: string,
    stato: string,
    datainizio: Date,
    scadenza: Date
}