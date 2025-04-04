export interface ApiProductItem{
  
        id: number
        name: string
        description: string
        price: number
        image: string
        rating: number
        brand: string
        resolution: string
        sensor: string
}
      
export interface Image {
        id: string;
        author: string;
        width: number;
        height: number;
        url: string;
        download_url: string;
      }