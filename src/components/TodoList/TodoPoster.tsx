'use client';
import { useGetPrismaQuery } from '@/redux/api/prisma';
import scss from './TodoPoster.module.scss';

const TodoPoster = () => {
  const { data } = useGetPrismaQuery();
  return (
    <div className={scss.TodoPoster}>
      <div className="container">
        <div className={scss.content}>
          {data?.map((el, idx) => (
            <div className="" key={idx}>
              <h1>{el.username}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoPoster;
