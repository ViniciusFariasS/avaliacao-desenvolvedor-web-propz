export interface IItems {
    items: IBeautyItem[]
}

export interface IBeautyItem {
    name: string;
    size: string;
    value: number;
    urlImage: string;
    url: string;
}

export interface IBeatutyItemFormated extends IBeautyItem {
    
}
