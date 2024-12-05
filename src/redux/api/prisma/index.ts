import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPrisma: build.query<Prisma.getToPrismaRes, Prisma.getToPrismaReq>({
      query: () => ({
        method: 'GET',
        url: 'api/get',
      }),
      providesTags: ['prisma'],
    }),
    createPrisma: build.mutation({
      query: (newData) => ({
        method: 'POST',
        url: 'api/create',
        body: newData,
      }),
      invalidatesTags: ['prisma'],
    }),
    deletePrisma: build.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `api/delete${id}`,
      }),

      invalidatesTags: ['prisma'],
    }),
    updatePrisma: build.mutation({
      query: ({ newData, id }) => ({
        method: 'PATCH',
        url: `api/edit${id}`,
        body: newData,
      }),
      invalidatesTags: ['prisma'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetPrismaQuery,
  useCreatePrismaMutation,
  useDeletePrismaMutation,
  useUpdatePrismaMutation,
} = api;
