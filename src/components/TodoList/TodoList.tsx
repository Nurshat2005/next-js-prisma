'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import scss from './TodoList.module.scss';
import { useCreatePrismaMutation } from '@/redux/api/prisma';

const TodoList = () => {
  const [create] = useCreatePrismaMutation();
  const { register, handleSubmit, reset } = useForm<IPrisma>();

  const handleSave: SubmitHandler<IPrisma> = async (data) => {
    try {
      const { username, url } = data;
      const prismaData = { username, url };

      const result = await create(prismaData).unwrap();

      console.log('Success:', result);
      reset();
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className={scss.TodoList}>
      <div className="container">
        <div className={scss.content}>
          <form onSubmit={handleSubmit(handleSave)} className={scss.form}>
            <input
              type="text"
              placeholder="Please enter text...😄"
              {...register('username', { required: true })}
            />
            <input
              type="url"
              placeholder="https://example.com"
              {...register('url', { required: true })}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
