import { useEffect, useState } from "react";
import { getAllStores } from "../api/stores.api";
import { StoreCard } from "./StoreCard";

export function StoreList() {
    const [stores, setStores] = useState([]);
    useEffect(() => {

        async function loadStores() {
            const res = await getAllStores();
            setStores(res.data);
        }
        
        loadStores();  
    }, []);

    return <div>
        {stores.map(store => (
            < StoreCard key={store.id_store} store={ store } />
        ))}
    </div>;
}