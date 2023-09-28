import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  newStore,
  deleteStore,
  updateStore,
  getStore,
} from '../api/stores.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { generateUniqueId } from '../api/uniqueId';

export function StoreNew() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (!params.id_store) {

      const uniqueId = generateUniqueId(); 
  
      data.id_store = uniqueId;
  
      await newStore(data);
  
      toast.success('Store created', {
        position: 'top-right',
        style: {
          backgroundColor: 'black',
          color: 'grey',
        },
      });
    } else {
      // Update the existing store
      updateStore(params.id_store, data);
  
      toast.success('Store updated', {
        position: 'top-right',
        style: {
          backgroundColor: 'black',
          color: 'grey',
        },
      });
    }
    navigate('/stores');
  });

  useEffect(() => {
    async function loadStore() {
      if (params.id_store) {
        const { data } = await getStore(params.id_store);
        setValue('id_store', data.id_store);
        setValue('name', data.name);
        setValue('user', data.user);
      }
    }
    loadStore();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Store Name'
          {...register('name', { required: true })}
        />
        {errors.name && <span>Name is required</span>}
        <input
          type='text'
          placeholder='User'
          {...register('user', { required: true })}
        />
        {errors.user && <span>Name is required</span>}

        <button>Save</button>
      </form>

      {params.id_store && (
        <button
          onClick={async () => {
            const accepted = window.confirm('are u shure?');
            if (accepted) {
              await deleteStore(params.id_store);
              toast.success('Store deleted', {
                position: 'top-right',
                style: {
                  backgroundColor: 'black',
                  color: 'grey',
                },
              });
              navigate('/stores');
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
