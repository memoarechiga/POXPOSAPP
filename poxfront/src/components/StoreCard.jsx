import { useNavigate } from 'react-router-dom';

export function StoreCard({ store }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/store/${store.id_store}`);
      }}
    >
      <h1>{store.name}</h1>
      <h4>{store.user}</h4>
    </div>
  );
}
