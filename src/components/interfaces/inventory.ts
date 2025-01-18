import {TableItem} from "../common/TableComponent.tsx";
import {SearchableItem} from "../common/SearchBarComponent.tsx";

export interface Inventory extends TableItem, SearchableItem {
    id: string;
    name: string;
    category: string;
    quantity: string;
    price: string;
    warehouse: string;
    image: string;
}