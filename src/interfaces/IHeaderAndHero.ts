// HeaderAndHeroProps.ts
export interface IHeaderAndHeroProps {
  scrollToForm: () => void; // Funzione che esegue lo scroll al form
  currentImage: number; // Indice dell'immagine attuale
  images: string[]; // array di stinghe con le immagini locali
}
