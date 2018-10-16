export interface MaterialItem {
    id: string;
    material: Material;
}

export interface MaterialList {
    id: string;
    created: string;
    creator: string;
    list: Material[];
}

export interface Material {
    type: string;
    diameter: number;
    fitting: Fitting;
    barcode: string;
    price: number;
    description: string;
    quantity: number;
    name: string;
}

export interface Fitting {
    type: string;
}
