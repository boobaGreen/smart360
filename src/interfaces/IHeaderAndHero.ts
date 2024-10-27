// HeaderAndHeroProps.ts
export interface IHeaderAndHeroProps {
  scrollToForm: () => void; // Funzione che esegue lo scroll al form
  currentImage: number; // Indice dell'immagine attuale
  images: string[]; // array di stinghe con le immagini locali
  setIsVisible: (visible: boolean) => void; // Funzione per settare la visibilità del modal
}
