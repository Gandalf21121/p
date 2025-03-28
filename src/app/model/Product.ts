export interface ApiResponseModel{
    message:string
    result:boolean
    data:any
}

export interface ApiProductItem{
        productId: number
        productSku: string
        productName: string
        productPrice: number
        productShortName: string
        productDescription: string
        createdDate: string
        deliveryTimeSpan: string
        categoryId: number
        productImageUrl: string
        categoryName: string
}
      
